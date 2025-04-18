import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFishingIcon],svg[icon-park-outline-fishing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20.987 34.552L12 29h27a3 3 0 1 1 0 6H22.564a3 3 0 0 1-1.577-.448"></svg:path><svg:path stroke-miterlimit="2" d="M30 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="M34 32c4-3 2.5-9.566 1.5-11.5S32.55 16 32.55 16s-1.05 0-2.05 1c-2.678 2.679-4.5 6-7 6s-6-2-6-2"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 15c-3.596-4.496-6.385-6.566-12-6.938C6.899 7.989 6 8.895 6 10v18m1 15c4 0 2.938-2 6-2c3.063 0 2 2 5.5 2s2.5-2 6-2s2.938 2 6 2c3.063 0 1.5-2 5-2s2.563 2 6.5 2"></svg:path></svg:g>`,
})
export class IconParkOutlineFishingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
