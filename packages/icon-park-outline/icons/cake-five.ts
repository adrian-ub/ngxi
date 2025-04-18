import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCakeFiveIcon],svg[icon-park-outline-cake-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 27h30l-4.687 17H13.686zm30 0H9c0-5.5 5.5-8 5.5-8c0-2 2-8 9.5-8s9.5 6 9.5 8c0 0 5.5 2.5 5.5 8"></svg:path><svg:path stroke-linecap="round" d="M6 27h36"></svg:path><svg:path d="M28 12a4 4 0 0 0-8 0"></svg:path><svg:path stroke-linecap="round" d="m24 8l4-4"></svg:path><svg:path d="M20 27v17m8-17v17"></svg:path></svg:g>`,
})
export class IconParkOutlineCakeFiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
