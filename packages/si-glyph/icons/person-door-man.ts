import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPersonDoorManIcon],svg[si-glyph-person-door-man-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.013 8.966c1.648 0 2.983-2.459 2.983-4.268q0-.359-.07-.695H6.098a3.5 3.5 0 0 0-.07.695c-.001 1.809 1.336 4.268 2.985 4.268M6 1h5.943v1.927H6zm6.042 9.634v5.328h4.93s.316-5.915-4.206-5.915c-.169.233-.434.42-.724.587M5.24 10C1.124 10 1 16 1 16h10v-4.985a11 11 0 0 1-1.986.434S6.1 11.16 5.24 10m4.776 5.031H8.969v-1.094h1.047zm.015-2H8.953v-1.062h1.078z"></svg:path>`,
})
export class SiGlyphPersonDoorManIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
