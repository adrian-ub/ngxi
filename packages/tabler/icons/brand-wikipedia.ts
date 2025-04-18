import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandWikipediaIcon],svg[tabler-brand-wikipedia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 4.984h2m3 0h2.5m4 0H17m5 0h-2m-16 0L9.455 19.5L16 4.984"></svg:path><svg:path d="M9 4.984L15 19.5l6-14.516"></svg:path></svg:g>`,
})
export class TablerBrandWikipediaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
