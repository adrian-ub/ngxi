import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPianoIcon],svg[whh-piano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.553 1024h-64q-27 0-45.5-19t-18.5-45V512q26 0 45-19t19-45V0h64q26 0 45 19t19 45v896q0 26-19 45t-45 19m-192-512v448q0 26-19 45t-45 19h-64q-27 0-45.5-19t-18.5-45V64q0-26 18.5-45t45.5-19h64v448q0 27 18.5 45.5t45.5 18.5m-320 512h-64q-27 0-45.5-19t-18.5-45V512q26 0 45-19t19-45V0h64q26 0 45 19t19 45v896q0 26-19 45t-45 19m-256 0h-64q-27 0-45.5-19t-18.5-45V64q0-26 18.5-45t45.5-19h64v448q0 26 18.5 45t45.5 19v448q0 26-19 45t-45 19"></svg:path>`,
})
export class WhhPianoIcon {
  readonly viewBox = input("0 0 961 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
