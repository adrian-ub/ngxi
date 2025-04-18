import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPoker3Icon],svg[si-glyph-poker-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.494 1H5.412C4.082 1 3 1.097 3 2.444v13.101c0 1.348 1.082 1.445 2.412 1.445h6.082c1.33 0 2.412-.098 2.412-1.445V2.444C13.906 1.097 12.824 1 11.494 1m-2.092 9.998h-.34v2.064H7.906v-2.064h-.258c-1.041.125-1.794.299-1.794-1.015c0-1.647 2.636-4.952 2.636-4.952s2.635 3.305 2.635 4.952c0 1.314-.682 1.14-1.723 1.015"></svg:path>`,
})
export class SiGlyphPoker3Icon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}
