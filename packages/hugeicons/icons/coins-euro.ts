import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCoinsEuroIcon],svg[hugeicons-coins-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16M3.157 11A7.111 7.111 0 0 0 13 20.843"></svg:path><svg:path d="M17 12.492c-.478.904-1.349 1.508-2.343 1.508c-1.51 0-2.734-1.393-2.734-3.111V9.11c0-1.717 1.224-3.11 2.734-3.11c.994 0 1.865.604 2.343 1.508M11 10h3.923"></svg:path></svg:g>`,
})
export class HugeiconsCoinsEuroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
