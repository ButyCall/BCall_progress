RegisterNetEvent('BCall_progress:muestra')
AddEventHandler('BCall_progress:muestra', function(time, text, cb, options)
	muestra(time, text, cb, options)
end)

function muestra(time, text, cb, options)
	SendNUIMessage({ time = time, text = text, options = options })
	if cb then
		Citizen.SetTimeout(time + 100, cb)
	end
end