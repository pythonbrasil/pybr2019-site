document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [
            'list',
            'googleCalendar'
        ],

        header: {
            left: 'title',
            right: 'tutoriais23,tutoriais24 talks25,talks26,talks27 sprints'
        },
        height: 'auto',

        // Python Brasil first day
        defaultDate: '2019-10-23',
        defaultView: 'tutoriais23',
        timeZone: 'America/Sao_Paulo',
        locale: 'pt-br',

        allDaySlot: false,
        minTime: "08:00:00",
        maxTime: "20:00:00",
        nowIndicator: true,

        views: {
            lista: {
                type: 'list',
                buttonText: 'Programação diária'
            },
            tutoriais23: {
                type: 'list',
                buttonText: 'Tutoriais: 23',
                visibleRange: {
                  start: '2019-10-23',
                  end: '2019-10-23'
                }
            },
            tutoriais24: {
                type: 'list',
                buttonText: '24',
                visibleRange: {
                  start: '2019-10-24',
                  end: '2019-10-24'
                }
            },
            talks25: {
                type: 'list',
                buttonText: 'Palestras: 25',
                visibleRange: {
                  start: '2019-10-25',
                  end: '2019-10-25'
                }
            },
            talks26: {
                type: 'list',
                buttonText: '26',
                visibleRange: {
                  start: '2019-10-26',
                  end: '2019-10-26'
                }
            },
            talks27: {
                type: 'list',
                buttonText: '27',
                visibleRange: {
                  start: '2019-10-27',
                  end: '2019-10-27'
                }
            },
            sprints: {
                type: 'list',
                buttonText: 'Sprints: 28',
                visibleRange: {
                  start: '2019-10-28',
                  end: '2019-10-28'
                }
            }
        },

        eventClick: function(info) {
          info.jsEvent.preventDefault();
        },

        eventRender: function(info) {
          // Palestrante
          var speaker = document.createElement("div");
          speaker.className = "speaker";
          speaker.appendChild(
            document.createTextNode(info.event._def.extendedProps.private.author)
          )

          // Sala
          var room = document.createElement("div");
          room.className = "room";
          room.appendChild(
            document.createTextNode(info.event._def.extendedProps.location)
          )

          var meta = document.createElement("div");
          meta.className = "meta";
          if (info.event._def.extendedProps.private.author) {
            meta.appendChild(speaker);
          }
          meta.appendChild(room);

          info.el.lastChild.appendChild(meta);
        },
        // Google Calendar settings
        googleCalendarApiKey: 'AIzaSyAIn8DyZFtthupLozgwIX3NUURFMWEIPb4',
        eventSources: [{
            googleCalendarId: 'ft5mdp26mhosq2heu6g87mb7ns@group.calendar.google.com'
        }]
    });

    calendar.render();
});
