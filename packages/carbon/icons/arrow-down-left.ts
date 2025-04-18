import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonArrowDownLeftIcon],svg[carbon-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 26v-2H9.41L26 7.41L24.59 6L8 22.59V10H6v16z"></svg:path>`,
})
export class CarbonArrowDownLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
