import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonVolumeDownFilledAltIcon],svg[carbon-volume-down-filled-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15h10v2H22zm-4 15a1 1 0 0 1-.71-.297L9.665 22H3a1 1 0 0 1-1-.999V11a1 1 0 0 1 .999-1h6.667l7.623-7.703A1 1 0 0 1 19 3v26a1 1 0 0 1-1 1"></svg:path>`,
})
export class CarbonVolumeDownFilledAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
