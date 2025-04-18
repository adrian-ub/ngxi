import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTagDuotoneIcon],svg[ph-tag-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M237.66 153L153 237.66a8 8 0 0 1-11.31 0l-99.35-99.32a8 8 0 0 1-2.34-5.65V40h92.69a8 8 0 0 1 5.65 2.34l99.32 99.32a8 8 0 0 1 0 11.34" opacity=".2"></svg:path><svg:path d="M243.31 136L144 36.69A15.86 15.86 0 0 0 132.69 32H40a8 8 0 0 0-8 8v92.69A15.86 15.86 0 0 0 36.69 144L136 243.31a16 16 0 0 0 22.63 0l84.68-84.68a16 16 0 0 0 0-22.63m-96 96L48 132.69V48h84.69L232 147.31ZM96 84a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhTagDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
