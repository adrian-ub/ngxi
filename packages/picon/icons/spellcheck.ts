import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSpellcheckIcon],svg[picon-spellcheck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7h6V6H6v2H5V6H4v2H3V6H2v2H1m1-3V0h4v5H5V3H3v2m0-4v1h2V1"></svg:path>`,
})
export class PiconSpellcheckIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
