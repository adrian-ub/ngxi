import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamFemaleIcon],svg[jam-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 12A5 5 0 1 0 7 2a5 5 0 0 0 0 10m1 4h1a1 1 0 0 1 0 2H8v1a1 1 0 0 1-2 0v-1H5a1 1 0 0 1 0-2h1v-2q0-.036.002-.07A7.002 7.002 0 0 1 7 0a7 7 0 0 1 .998 13.93L8 14z"></svg:path>`,
})
export class JamFemaleIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
