import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLetterCaseLowerIcon],svg[tabler-letter-case-lower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m7-3.5v7m4-3.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m7-3.5v7"></svg:path>`,
})
export class TablerLetterCaseLowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
