import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhJoystickatariIcon],svg[whh-joystickatari-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1024H64q-26 0-45-19T0 960V832q0-26 19-45t45-19h256q0-26 18.5-45t45.5-19V192q0-20 20.5-42t43.5-22h192q27 0 45.5 19t18.5 45l-64 128v384q27 0 45.5 19t18.5 45h256q26 0 45 19t19 45v128q0 27-18.5 45.5T960 1024M511.5 0Q538 0 557 19t19 45H448q0-26 18.5-45t45-19M128 640h64q26 0 45 19t19 45H64q0-26 18.5-45t45.5-19"></svg:path>`,
})
export class WhhJoystickatariIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
