import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPantoneFillIcon],svg[ri-pantone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 18.922l-1.35-.545a1 1 0 0 1-.552-1.302L4 12.367zM8.86 21H7a1 1 0 0 1-1-1v-6.078zM6.022 5.968l9.272-3.746a1 1 0 0 1 1.302.552l5.619 13.908a1 1 0 0 1-.553 1.302L12.39 21.73a1 1 0 0 1-1.302-.553L5.47 7.27a1 1 0 0 1 .553-1.302M9 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiPantoneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
