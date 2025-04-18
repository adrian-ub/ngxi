import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRssIcon],svg[hugeicons-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.992 20.5c.72 0 1-.004 1-.004c3.417-.025 5.3-.186 6.542-1.24C22 18.01 22 16.005 22 12s0-6.01-1.466-7.255S16.71 3.5 11.991 3.5s-7.078 0-8.544 1.245C2.324 5.698 2.062 7.097 2 9.5m.982 10h.01"></svg:path><svg:path d="M2 15.735c2.493 0 4.77 2.265 4.77 4.765m3.23 0c0-4.5-4.005-8-7.955-8"></svg:path></svg:g>`,
})
export class HugeiconsRssIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
