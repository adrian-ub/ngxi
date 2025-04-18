import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilArrowDownIcon],svg[il-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M622 106L311 417L0 106l65-65l246 245L556 41z"></svg:path>`,
})
export class IlArrowDownIcon {
  readonly viewBox = input("0 0 630 700")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
