import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHexagonStripIcon],svg[icon-park-outline-hexagon-strip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 4h10v11.34l9.82-5.67l5 8.66L34 24l9.82 5.67l-5 8.66L29 32.66V44H19V32.66l-9.82 5.67l-5-8.66L14 24l-9.82-5.67l5-8.66L19 15.34z"></svg:path>`,
})
export class IconParkOutlineHexagonStripIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
