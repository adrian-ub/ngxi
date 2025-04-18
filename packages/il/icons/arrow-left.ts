import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilArrowLeftIcon],svg[il-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M311 630L0 319L311 8l65 66l-245 245l245 245z"></svg:path>`,
})
export class IlArrowLeftIcon {
  readonly viewBox = input("0 0 380 790")
  readonly width = input("0.49em")
  readonly height = input("1em")
}
