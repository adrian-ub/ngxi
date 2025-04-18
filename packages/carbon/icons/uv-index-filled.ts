import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonUvIndexFilledIcon],svg[carbon-uv-index-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 30l-3.463-5.822L6 26l1.822-6.537L2 16l5.822-3.463L6 6l6.537 1.822L16 2l3.463 5.822L26 6l-1.822 6.537L30 16l-5.822 3.463L26 26l-6.537-1.822Z"></svg:path>`,
})
export class CarbonUvIndexFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
