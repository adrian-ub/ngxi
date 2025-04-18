import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonArrowUpLeftIcon],svg[carbon-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6v2H9.41L26 24.59L24.59 26L8 9.41V22H6V6z"></svg:path>`,
})
export class CarbonArrowUpLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
