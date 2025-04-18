import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignBottomBoldIcon],svg[ph-align-bottom-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 216a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12m-92-48V80a20 20 0 0 1 20-20h36a20 20 0 0 1 20 20v88a20 20 0 0 1-20 20h-36a20 20 0 0 1-20-20m24-4h28V84h-28Zm-116 4V40a20 20 0 0 1 20-20h36a20 20 0 0 1 20 20v128a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20m24-4h28V44H68Z"></svg:path>`,
})
export class PhAlignBottomBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
