import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphLightAlarmIcon],svg[si-glyph-light-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12h11v2H2zm10-1H3V9.667C3 7.826 3.75 5 7.5 5S12 7.826 12 9.667zM7 2h1v2H7zM2.597 3.44l.707-.708l1.414 1.414l-.707.707zm10.413-.293l.707.707l-1.414 1.414l-.707-.707zM13 8h2v1h-2zM0 8h1.75v1H0z"></svg:path>`,
})
export class SiGlyphLightAlarmIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
