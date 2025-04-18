import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowDiagonalTwoIcon],svg[mynaui-arrow-diagonal-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.293 4.929l7.778 7.778m0 0h-4.95m4.95 0v-4.95m-6.364 11.314L4.93 11.293m0 0v4.95m0-4.95h4.95"></svg:path>`,
})
export class MynauiArrowDiagonalTwoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
