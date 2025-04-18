import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphUmberllaChairIcon],svg[si-glyph-umberlla-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9 0L1 6v1.984h.953v-1H4v1h1.969v-1h2.047v1h1v5.985h.948V7.984h.005v-1h2.078v1H14v-1h2.016v1H17V6z"></svg:path><svg:path d="M3.229 11.016H1V12h1.678l3.342 2.994l1.011-.01v.985h.938v-.985h1.062v.985H10v-.985h4.047v.985H15v-.985h.984V14H6.562z"></svg:path></svg:g>`,
})
export class SiGlyphUmberllaChairIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
