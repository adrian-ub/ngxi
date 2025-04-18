import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLanguageKatakanaIcon],svg[tabler-language-katakana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h6.586a1 1 0 0 1 .707 1.707L11 8M8 8c0 1.5.5 3-2 5m6 7l4-9l4 9m-.9-2h-6.2"></svg:path>`,
})
export class TablerLanguageKatakanaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
