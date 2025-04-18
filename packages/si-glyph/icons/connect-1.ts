import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphConnect1Icon],svg[si-glyph-connect-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.969 11.082V4.918A2.47 2.47 0 1 0 12 2.5c0 1.213.877 2.217 2.031 2.425v6.15c-.32.058-.618.177-.883.345L5.533 3.848c.254-.388.404-.85.404-1.348a2.47 2.47 0 1 0-2.938 2.422v6.156a2.468 2.468 0 1 0 1 .014V4.908c.301-.066.58-.186.829-.351l7.599 7.556a2.47 2.47 0 1 0 2.542-1.031"></svg:path>`,
})
export class SiGlyphConnect1Icon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
