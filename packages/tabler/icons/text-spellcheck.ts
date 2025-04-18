import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTextSpellcheckIcon],svg[tabler-text-spellcheck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15V7.5a3.5 3.5 0 0 1 7 0V15m-7-5h7m-2 8l3 3l7-7"></svg:path>`,
})
export class TablerTextSpellcheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
