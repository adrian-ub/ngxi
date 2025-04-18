import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignTopBoldIcon],svg[ph-align-top-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 40a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12m-16 48v88a20 20 0 0 1-20 20h-36a20 20 0 0 1-20-20V88a20 20 0 0 1 20-20h36a20 20 0 0 1 20 20m-24 4h-28v80h28Zm-68-4v128a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20V88a20 20 0 0 1 20-20h36a20 20 0 0 1 20 20m-24 4H68v120h28Z"></svg:path>`,
})
export class PhAlignTopBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
