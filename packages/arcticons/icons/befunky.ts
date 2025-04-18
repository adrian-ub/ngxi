import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBefunkyIcon],svg[arcticons-befunky-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="31.468" r="12.032"></svg:circle><svg:path d="M25.819 28.318h-3.638l-1.819 3.15l1.819 3.15h3.638l1.819-3.15zm1.819 3.15l4.896 8.481M15.466 22.987l4.896 8.481m6.716-11.631l-4.897 8.481m3.638 6.3l-4.897 8.481m1.259-8.481h-9.796m13.434-6.3h9.796"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.968 31.468V4.5"></svg:path>`,
})
export class ArcticonsBefunkyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
