package com.telmion.mushroom.model;

import java.util.List;
import java.util.Map;

public class MushroomResponse {
	private List<String> columnNames;
	private List<Map<String, String>> data;


	public MushroomResponse(List<String> columnNames, List<Map<String, String>> data){
		this.columnNames = columnNames;
		this.data = data;
	}

	public List<String> getColumnNames() {
		return columnNames;
	}

	public List<Map<String, String>> getData() {
		return data;
	}
}
