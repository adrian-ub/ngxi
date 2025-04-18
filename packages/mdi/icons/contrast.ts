import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiContrastIcon],svg[mdi-contrast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.38 20.9a2 2 0 0 1-1.28-1.27L19.63 3.1a2 2 0 0 1 1.27 1.28zM20 16v2h-7v-2zM3 6h3V3h2v3h3v2H8v3H6V8H3z"></svg:path>`,
})
export class MdiContrastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
