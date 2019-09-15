document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [
            'timeGrid',
            'list',
            'googleCalendar'
        ],

        header: {
            left: 'title',
            right: 'prev,next,lista pythonBrasilView'
        },
        height: 'auto',

        // Python Brasil first day
        defaultDate: '2019-10-23',
        defaultView: 'pythonBrasilView',
        timeZone: 'America/Sao_Paulo',
        locale: 'pt-br',

        allDaySlot: false,
        minTime: "08:00:00",
        maxTime: "20:00:00",
        nowIndicator: true,
        validRange: {
            start: '2019-10-23',
            end: '2019-10-29'
        },

        views: {
            lista: {
                type: 'list',
                buttonText: 'Programação diária'
            },
            pythonBrasilView: {
                type: 'timeGrid',
                duration: {
                    days: 6
                },
                buttonText: 'Semana'
            }
        },

        eventRender: function(info) {
            console.log(info.event.extendedProps);
        },
        // Google Calendar settings
        googleCalendarApiKey: 'AIzaSyAIn8DyZFtthupLozgwIX3NUURFMWEIPb4',
        eventSources: [{
            googleCalendarId: 'jths8n37mctkpakf2slrtbk5kk@group.calendar.google.com'
        }]
    });

    calendar.render();
});
