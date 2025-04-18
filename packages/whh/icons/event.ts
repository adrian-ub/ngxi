import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhEventIcon],svg[whh-event-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.5 960h-896q-27 0-45.5-18.5T.5 896V384h1024v512q0 27-18.5 45.5T960.5 960m-192-384h-256v192h256zM.5 192q0-27 19-45.5t45-18.5h64V64q0-26 19-45T193 0t45 19t18.5 45v64h512V64q0-26 19-45T833 0t45 19t18.5 45v64h64q27 0 45.5 19t18.5 45v128H.5z"></svg:path>`,
})
export class WhhEventIcon {
  readonly viewBox = input("0 0 1025 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
