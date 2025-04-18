import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowURightDownDuotoneIcon],svg[ph-arrow-u-right-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m216 176l-48 48l-48-48Z" opacity=".2"></svg:path><svg:path d="M223.39 172.94A8 8 0 0 0 216 168h-40V88a64 64 0 0 0-128 0v88a8 8 0 0 0 16 0V88a48 48 0 0 1 96 0v80h-40a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48a8 8 0 0 0 1.73-8.72M168 212.69L139.31 184h57.38Z"></svg:path></svg:g>`,
})
export class PhArrowURightDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
