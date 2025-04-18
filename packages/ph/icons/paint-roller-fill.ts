import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPaintRollerFillIcon],svg[ph-paint-roller-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 104v50a16.07 16.07 0 0 1-11.6 15.38L136 198v34a8 8 0 0 1-16 0v-34a16.07 16.07 0 0 1 11.6-15.38L232 154v-50h-16v24a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-24H16a8 8 0 0 1 0-16h16V64a16 16 0 0 1 16-16h152a16 16 0 0 1 16 16v24h16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhPaintRollerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
