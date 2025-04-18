import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenHemiIcon],svg[token-hemi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.725 3.002a.17.17 0 0 0-.195.135l-1.11 6.438h-.84l-1.11-6.438a.17.17 0 0 0-.195-.135c-3.975.779-7.02 4.222-7.26 8.414c0 0-.015.18-.015.27V12c0 4.447 3.135 8.16 7.275 8.983a.17.17 0 0 0 .195-.135l1.11-6.438h.84l1.11 6.453a.17.17 0 0 0 .195.135c3.96-.794 7.005-4.222 7.26-8.414c0 0 .015-.18.015-.27V12c0-4.476-3.12-8.174-7.275-8.998"></svg:path>`,
})
export class TokenHemiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
