import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiHalfStarRtlIcon],svg[ooui-half-star-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.4 12.5l-1.6 7l6.2-3.7l6.2 3.7l-1.6-7L20 7h-7L10 .5L7 7H0zm.8 3.7l1-4.3l-3.7-3.4h4.6L10 4.6v9.3z"></svg:path>`,
})
export class OouiHalfStarRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
