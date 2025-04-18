import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphUmbrellaCloseIcon],svg[si-glyph-umbrella-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.031 10.938v1.045h.938L7.907 1.968V.43a.411.411 0 0 0-.824 0v1.538L3.985 11.983h.953v-1.045h1.078v1.045h1.016v3.549c0 .228.251.412.479.412s.459-.185.459-.412v-3.549h.969v-1.045z"></svg:path>`,
})
export class SiGlyphUmbrellaCloseIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
