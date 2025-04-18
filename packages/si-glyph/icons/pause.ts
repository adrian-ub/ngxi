import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPauseIcon],svg[si-glyph-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.002 1c0-.553.444-1 .993-1h3.972c.549 0 .993.447.993 1v14c0 .553-.444 1-.993 1H1.995a.996.996 0 0 1-.993-1zm8 0c0-.553.444-1 .993-1h3.972c.549 0 .993.447.993 1v14c0 .553-.444 1-.993 1H9.995a.996.996 0 0 1-.993-1z"></svg:path>`,
})
export class SiGlyphPauseIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
