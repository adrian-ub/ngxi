import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilArrowUpIcon],svg[il-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 352L311 41l311 311l-66 65l-245-245L65 417z"></svg:path>`,
})
export class IlArrowUpIcon {
  readonly viewBox = input("0 0 630 700")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
