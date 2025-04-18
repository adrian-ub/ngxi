import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsLinkIcon],svg[flat-color-icons-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1976D2" d="M38 13h-3c-5.5 0-10 4.5-10 10s4.5 10 10 10h3c5.5 0 10-4.5 10-10s-4.5-10-10-10m0 16h-3c-3.3 0-6-2.7-6-6s2.7-6 6-6h3c3.3 0 6 2.7 6 6s-2.7 6-6 6M13 13h-3C4.5 13 0 17.5 0 23s4.5 10 10 10h3c5.5 0 10-4.5 10-10s-4.5-10-10-10m0 16h-3c-3.3 0-6-2.7-6-6s2.7-6 6-6h3c3.3 0 6 2.7 6 6s-2.7 6-6 6"></svg:path><svg:path fill="#42A5F5" d="M33 21H15c-1.1 0-2 .9-2 2s.9 2 2 2h18c1.1 0 2-.9 2-2s-.9-2-2-2"></svg:path>`,
})
export class FlatColorIconsLinkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
