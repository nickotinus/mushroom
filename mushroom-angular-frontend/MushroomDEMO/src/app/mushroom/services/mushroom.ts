import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";

export interface MushroomResponse<ResultType>{
	columnNames: string[];
	data: ResultType[];
}

@Injectable()
export class MushroomService {
	private CORS_HEADER = new HttpHeaders().set("Access-Control-Allow-Origin", "*");

	constructor(private http: HttpClient) {}

	public read<ResultType, Parameters>(query: string, parameters: Parameters, callback: (resultSet: ResultType[]) => void){

		console.log("read");
		this.http.get<MushroomResponse<ResultType>>(
			environment.mushroomHost + this.keyFactory(query),
			{
				params: this.httpParametersGenerator(parameters),
				headers: this.CORS_HEADER
			}
		).subscribe(
			resultSet =>{
				callback(resultSet.data);
			},
			error2 => {
				console.log("error", error2);
			}
		)
	}

	public readVoid<ResultType>(query: string, callback: (resultSet: ResultType[]) => void){
		this.http.get<MushroomResponse<ResultType>>(
			environment.mushroomHost + this.keyFactory(query),
			{
				headers: this.CORS_HEADER
			}
		).subscribe(
			resultSet =>{
				callback(resultSet.data);
			},
			error2 => {
				console.log("error", error2);
			}
		)
	}

	public write<Parameters>(query: string, parameters: Parameters, callback:() => void){
		this.http.post(
			environment.mushroomHost + this.keyFactory(query),
			null,
			{
				params: this.httpParametersGenerator(parameters),
				headers: this.CORS_HEADER
			}
		).subscribe(
			success => {
				callback()
			},
			error => {
				callback()
			}
		)
	}


	public writeForId<Parameters>(query: string, idKey: string, parameters: Parameters, callback:(number) => void){
		this.http.post(
			environment.mushroomHost + this.keyFactory(query) + "/" + idKey,
			null,
			{
				params: this.httpParametersGenerator(parameters),
				headers: this.CORS_HEADER
			}
		).subscribe(
			success => {
				callback(success)
			},
			error => {
				callback(-1)
			}
		)
	}

	private httpParametersGenerator<Parameters>(parameters: Parameters): HttpParams{
		let httpParams = new HttpParams();

		Object.keys(parameters).forEach(function (key) {
			httpParams = httpParams.append(key, parameters[key]);
		});

		return httpParams
	}

	private keyFactory(query: string): string{
		return query;
	}

}
