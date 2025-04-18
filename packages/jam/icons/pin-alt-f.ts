import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamPinAltFIcon],svg[jam-pin-alt-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10.465a5.002 5.002 0 0 1 1-9.9a5 5 0 0 1 1 9.9v9.1a1 1 0 0 1-2 0z"></svg:path>`,
})
export class JamPinAltFIcon {
  readonly viewBox = input("-7 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
