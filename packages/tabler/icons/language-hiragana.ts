import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLanguageHiraganaIcon],svg[tabler-language-hiragana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 5h7M7 4c0 4.846 0 7 .5 8"></svg:path><svg:path d="M10 8.5c0 2.286-2 4.5-3.5 4.5S4 11.865 4 11q0-3 3-3c3 0 5 .57 5 2.857q0 2.286-2 3.143m2 6l4-9l4 9m-.9-2h-6.2"></svg:path></svg:g>`,
})
export class TablerLanguageHiraganaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
