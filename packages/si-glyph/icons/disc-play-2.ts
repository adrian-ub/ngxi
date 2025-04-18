import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDiscPlay2Icon],svg[si-glyph-disc-play-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.516 2.984L12.141 7h2.805L8.492.027L2.035 7h2.807zm0 10.035L4.809 9.031H2.003l6.468 6.903l6.468-6.903h-2.806z"></svg:path>`,
})
export class SiGlyphDiscPlay2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
