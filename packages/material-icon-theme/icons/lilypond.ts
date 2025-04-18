import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeLilypondIcon],svg[material-icon-theme-lilypond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#66bb6a" d="M10 8v11.023A4.986 4.986 0 1 0 11.9 24h.1V11.6l16-3.2v8.623A4.986 4.986 0 1 0 29.9 22h.1V4Z"></svg:path>`,
})
export class MaterialIconThemeLilypondIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
