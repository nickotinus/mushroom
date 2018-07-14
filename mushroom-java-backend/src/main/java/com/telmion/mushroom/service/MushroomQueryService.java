package com.telmion.mushroom.service;

import com.telmion.mushroom.model.MushroomResponse;

import java.util.Map;

public interface MushroomQueryService {

	MushroomResponse read(String queryKey, Map<String, String> queryParameters);

	long write(String queryKey, Map<String, String> queryParameters);

	long writeForId(String queryKey, String idKey, Map<String, String> queryParameters);
}
