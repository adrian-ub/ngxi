import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilArrowRightIcon],svg[il-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m65 8l311 311L65 630L0 564l245-245L0 74z"></svg:path>`,
})
export class IlArrowRightIcon {
  readonly viewBox = input("0 0 380 790")
  readonly width = input("0.49em")
  readonly height = input("1em")
}
