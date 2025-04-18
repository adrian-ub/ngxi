import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumpadLightIcon],svg[ph-numpad-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M78 48a14 14 0 1 1-14-14a14 14 0 0 1 14 14m50-14a14 14 0 1 0 14 14a14 14 0 0 0-14-14m64 28a14 14 0 1 0-14-14a14 14 0 0 0 14 14M64 90a14 14 0 1 0 14 14a14 14 0 0 0-14-14m64 0a14 14 0 1 0 14 14a14 14 0 0 0-14-14m64 0a14 14 0 1 0 14 14a14 14 0 0 0-14-14M64 146a14 14 0 1 0 14 14a14 14 0 0 0-14-14m64 0a14 14 0 1 0 14 14a14 14 0 0 0-14-14m0 56a14 14 0 1 0 14 14a14 14 0 0 0-14-14m64-56a14 14 0 1 0 14 14a14 14 0 0 0-14-14"></svg:path>`,
})
export class PhNumpadLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
