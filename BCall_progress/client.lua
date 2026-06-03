local function ShowProgress(time, text, cb, options)
    SendNUIMessage({
        time = time,
        text = text,
        options = options or {}
    })

    if cb then
        SetTimeout(time + 100, cb)
    end
end

RegisterNetEvent('BCall_progress:muestra', function(time, text, cb, options)
    ShowProgress(time, text, cb, options)
end)