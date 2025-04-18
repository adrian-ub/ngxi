import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTrayArrowDownDuotoneIcon],svg[ph-tray-arrow-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v112h-36.69a8 8 0 0 0-5.66 2.34l-19.31 19.32a8 8 0 0 1-5.66 2.34h-41.37a8 8 0 0 1-5.66-2.34l-19.31-19.32a8 8 0 0 0-5.66-2.34H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 16v104h-28.7a15.86 15.86 0 0 0-11.3 4.69L148.69 176h-41.38L88 156.68A15.9 15.9 0 0 0 76.69 152H48V48Zm0 160H48v-40h28.69L96 187.32a15.9 15.9 0 0 0 11.31 4.68h41.38a15.86 15.86 0 0 0 11.31-4.69L179.31 168H208zM90.34 125.66a8 8 0 0 1 11.32-11.32L120 132.69V72a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 11.32l-32 32a8 8 0 0 1-11.32 0Z"></svg:path></svg:g>`,
})
export class PhTrayArrowDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
