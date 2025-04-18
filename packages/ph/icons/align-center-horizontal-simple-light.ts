import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterHorizontalSimpleLightIcon],svg[ph-align-center-horizontal-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 82h-74V48a6 6 0 0 0-12 0v34H48a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h74v34a6 6 0 0 0 12 0v-34h74a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14m2 78a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhAlignCenterHorizontalSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
