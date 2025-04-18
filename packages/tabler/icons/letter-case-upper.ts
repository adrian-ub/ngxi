import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLetterCaseUpperIcon],svg[tabler-letter-case-upper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19V8.5a3.5 3.5 0 0 1 7 0V19m-7-6h7m4 6V8.5a3.5 3.5 0 0 1 7 0V19m-7-6h7"></svg:path>`,
})
export class TablerLetterCaseUpperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
