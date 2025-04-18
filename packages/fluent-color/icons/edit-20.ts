import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorEdit20Icon],svg[fluent-color-edit-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorEdit200)" d="M12.251 3.542L4 11.794l1.05 3.156l3.173 1.034l8.235-8.235z"></svg:path><svg:path fill="url(#fluentColorEdit201)" d="m4.12 11.674l-.575.574a2.44 2.44 0 0 0-.655 1.194l-.878 3.95a.5.5 0 0 0 .597.597l3.926-.873a2.5 2.5 0 0 0 1.234-.678l.557-.557S6.72 15.4 5.66 14.34s-1.54-2.667-1.54-2.667"></svg:path><svg:path fill="url(#fluentColorEdit202)" d="M12.92 2.873a2.975 2.975 0 0 1 4.207 4.207l-2.083 2.083l-4.207-4.207z"></svg:path><svg:path fill="url(#fluentColorEdit203)" d="m10.263 5.53l1.635-1.634s.477 1.609 1.537 2.67s2.67 1.537 2.67 1.537L14.487 9.72s-1.617-.47-2.678-1.53s-1.546-2.66-1.546-2.66"></svg:path><svg:defs><svg:lineargradient id="fluentColorEdit200" x1="10.89" x2="12.789" y1="7.022" y2="12.245" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFA43D"></svg:stop><svg:stop offset="1" stop-color="#FB5937"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorEdit201" x1="1.093" x2="5.654" y1="13.437" y2="17.969" gradientUnits="userSpaceOnUse"><svg:stop offset=".255" stop-color="#FFD394"></svg:stop><svg:stop offset="1" stop-color="#FF921F"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorEdit202" x1="16.5" x2="13.86" y1="3.492" y2="5.974" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#DD3CE2"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorEdit203" x1="13.285" x2="9.161" y1="7.883" y2="6.074" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#FFE994"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorEdit20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
