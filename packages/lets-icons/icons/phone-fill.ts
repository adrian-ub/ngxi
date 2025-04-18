import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsPhoneFillIcon],svg[lets-icons-phone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.68 3.32l.613-.613a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414L9.5 8.5a.98.98 0 0 0-.183 1.133a11.3 11.3 0 0 0 5.05 5.05a.98.98 0 0 0 1.133-.184l1.793-1.792a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414l-.613.613a6 6 0 0 1-7.843.558l-1.208-.907a23 23 0 0 1-4.6-4.6l-.907-1.208A6 6 0 0 1 6.68 3.32"></svg:path>`,
})
export class LetsIconsPhoneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
