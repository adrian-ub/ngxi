import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphBellIcon],svg[si-glyph-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.141 1.318c0-.711-.559-1.286-1.248-1.286S7.646.607 7.646 1.318q.001.12.022.237C5.002 2.594 3 4.772 3 10h12c.001-5.229-2.216-7.405-4.883-8.445q.023-.116.024-.237M16 13H2l.906-2h11.906zm-7.039 3a1.96 1.96 0 0 0 1.961-1.957H7A1.96 1.96 0 0 0 8.961 16"></svg:path>`,
})
export class SiGlyphBellIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
