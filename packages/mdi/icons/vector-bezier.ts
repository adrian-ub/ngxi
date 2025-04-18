import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVectorBezierIcon],svg[mdi-vector-bezier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 4A1.5 1.5 0 0 0 6 5.5A1.5 1.5 0 0 0 7.5 7c.63 0 1.2-.4 1.41-1H13c.67-.67 1.33-1 2-1H8.91c-.21-.6-.78-1-1.41-1M19 5C8 5 14 17 5 17v2c11 0 5-12 14-12zm-2.5 12c-.63 0-1.2.4-1.41 1H11c-.67.67-1.33 1-2 1h6.09c.21.6.78 1 1.41 1a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class MdiVectorBezierIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
