import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsSitemapIcon],svg[ls-sitemap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M604 338v142h76v181H499V480h75V368H355v112h76v181H249V480h76V368H106v112h75v181H0V480h76V338h249V228h-98V47h226v181h-98v110z"></svg:path>`,
})
export class LsSitemapIcon {
  readonly viewBox = input("0 0 680 661")
  readonly width = input("1.03em")
  readonly height = input("1em")
}
