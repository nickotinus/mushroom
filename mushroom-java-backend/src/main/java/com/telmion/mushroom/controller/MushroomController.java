package com.telmion.mushroom.controller;

import com.telmion.mushroom.model.MushroomResponse;
import com.telmion.mushroom.service.MushroomQueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class MushroomController {

	@Autowired
	MushroomQueryService mushroomQueryService;

	@CrossOrigin
	@RequestMapping(value = "/mushroom/{queryKey:.+}", method = RequestMethod.GET, produces="application/json;charset=UTF-8")
	public ResponseEntity<MushroomResponse> read(@PathVariable String queryKey, @RequestParam Map<String, String> queryParameters) {

        System.out.printf("request: %s, %s\n", queryKey, queryParameters);

		MushroomResponse resultSet = mushroomQueryService.read(queryKey, queryParameters);
		if (resultSet == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<>(
				resultSet,
				HttpStatus.OK
		);
	}

	@CrossOrigin
	@RequestMapping(value = "/mushroom/{queryKey:.+}", method = RequestMethod.POST, produces="application/json;charset=UTF-8")
	public ResponseEntity<Long> write(@PathVariable String queryKey, @RequestParam Map<String, String> queryParameters) {

        System.out.printf("request: %s, %s\n", queryKey, queryParameters);

		convertUndefinedToNull(queryParameters);

		return new ResponseEntity<>(
				mushroomQueryService.write(queryKey, queryParameters),
				HttpStatus.OK
		);
	}

	@CrossOrigin
	@RequestMapping(value = "/mushroom/{queryKey:.+}/{idKey}", method = RequestMethod.POST, produces="application/json;charset=UTF-8")
	public ResponseEntity<Long> writeForId(@PathVariable String queryKey, @PathVariable String idKey, @RequestParam Map<String, String> queryParameters) {

        System.out.printf("request: %s, %s\n", queryKey, queryParameters);

		convertUndefinedToNull(queryParameters);

		return new ResponseEntity<>(
				mushroomQueryService.writeForId(queryKey, idKey, queryParameters),
				HttpStatus.OK
		);
	}

	private void convertUndefinedToNull(@RequestParam Map<String, String> queryParameters) {
		for (Map.Entry<String, String> entry : queryParameters.entrySet()){
			if ("null".equalsIgnoreCase(entry.getValue()) || "undefined".equalsIgnoreCase(entry.getValue())){
				queryParameters.put(entry.getKey(), null);
			}
		}
	}
}
