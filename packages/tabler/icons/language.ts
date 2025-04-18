import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLanguageIcon],svg[tabler-language-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 5h7M9 3v2c0 4.418-2.239 8-5 8"></svg:path><svg:path d="M5 9c0 2.144 2.952 3.908 6.7 4m.3 7l4-9l4 9m-.9-2h-6.2"></svg:path></svg:g>`,
})
export class TablerLanguageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
