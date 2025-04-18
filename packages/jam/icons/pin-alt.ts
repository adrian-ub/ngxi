import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamPinAltIcon],svg[jam-pin-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9.9A5.002 5.002 0 0 1 5 0a5 5 0 0 1 1 9.9V19a1 1 0 0 1-2 0zM5 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class JamPinAltIcon {
  readonly viewBox = input("-7 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
