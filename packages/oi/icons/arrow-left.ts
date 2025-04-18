import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiArrowLeftIcon],svg[oi-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1L0 3.53L3 6V4h5V3H3z"></svg:path>`,
})
export class OiArrowLeftIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
