import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphClockIcon],svg[si-glyph-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.008 16.929c-4.385 0-7.95-3.563-7.95-7.942c0-4.381 3.565-7.944 7.95-7.944s7.95 3.563 7.95 7.944c0 4.378-3.566 7.942-7.95 7.942M8.973 2.863c-3.354 0-6.084 2.742-6.084 6.111s2.73 6.111 6.084 6.111c3.355 0 6.085-2.742 6.085-6.111s-2.73-6.111-6.085-6.111"></svg:path><svg:path d="M8 5h.959v3.978H8zm0 4h3.938v.979H8z"></svg:path></svg:g>`,
})
export class SiGlyphClockIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
