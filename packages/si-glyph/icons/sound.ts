import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphSoundIcon],svg[si-glyph-sound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.987 14.868c0 .626-.679 1.132-1.516 1.132l-6.514-4.527c-.839 0-1.913-.508-1.913-1.133V5.682c0-.624 1.074-1.132 1.913-1.132L12.471.022c.837 0 1.516.508 1.516 1.133z"></svg:path>`,
})
export class SiGlyphSoundIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
