import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDomeIcon],svg[icon-park-outline-dome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 43h40"></svg:path><svg:path d="M5 24s9-1 19-1s19 1 19 1M6 18s9.053-4 18-4s18 4 18 4M5 30s9 2 19 2s19-2 19-2"></svg:path><svg:path d="M24 6C12.954 6 4 14.954 4 26c0 7.809 3.475 13.706 10 17h20c6.525-3.294 10-9.191 10-17c0-11.046-8.954-20-20-20Z"></svg:path><svg:path d="M24 6c-3.866 0-7 8.954-7 20c0 7.177 1.012 13.472 3 17h8c1.988-3.528 3-9.823 3-17c0-11.046-3.134-20-7-20Z"></svg:path></svg:g>`,
})
export class IconParkOutlineDomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
