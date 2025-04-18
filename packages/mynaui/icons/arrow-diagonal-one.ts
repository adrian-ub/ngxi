import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDiagonalOneIcon],svg[mynaui-arrow-diagonal-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.929 12.707l7.778-7.778m0 0v4.95m0-4.95h-4.95m11.314 6.364l-7.778 7.778m0 0h4.95m-4.95 0v-4.95"></svg:path>`,
})
export class MynauiArrowDiagonalOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
