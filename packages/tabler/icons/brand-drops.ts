import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandDropsIcon],svg[tabler-brand-drops-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17.637 7.416a7.91 7.91 0 0 1 1.76 8.666A8 8 0 0 1 12 21a8 8 0 0 1-7.396-4.918a7.91 7.91 0 0 1 1.759-8.666L12 2z"></svg:path><svg:path d="M14.466 10.923a3.6 3.6 0 0 1 .77 3.877A3.5 3.5 0 0 1 12 17a3.5 3.5 0 0 1-3.236-2.2a3.6 3.6 0 0 1 .77-3.877L12 8.5z"></svg:path></svg:g>`,
})
export class TablerBrandDropsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
