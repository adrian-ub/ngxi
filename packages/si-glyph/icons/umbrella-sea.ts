import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphUmbrellaSeaIcon],svg[si-glyph-umbrella-sea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.469 1L1 7v1.984h.953v-1H4v1h1.969v-1h2.047v7.047H5.002v1H3v.907h10.938v-.907H12v-1H8.964V8.984h.005v-1h2.078v1H13v-1h2.016v1H16V7z"></svg:path>`,
})
export class SiGlyphUmbrellaSeaIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
