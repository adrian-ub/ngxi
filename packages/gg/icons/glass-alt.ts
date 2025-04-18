import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggGlassAltIcon],svg[gg-glass-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 2h14l-1.64 16.398A4 4 0 0 1 13.38 22h-2.76a4 4 0 0 1-3.98-3.602zm2.51 5l-.3-3h9.58l-.3 3zm.2 2l.92 9.199A2 2 0 0 0 10.62 20h2.76a2 2 0 0 0 1.99-1.801L16.29 9z" clip-rule="evenodd"></svg:path>`,
})
export class GgGlassAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
