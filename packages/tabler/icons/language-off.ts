import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLanguageOffIcon],svg[tabler-language-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 5h1m4 0h2M9 3v2m-.508 3.517C7.678 11.172 5.972 13 4 13"></svg:path><svg:path d="M5 9c0 2.144 2.952 3.908 6.7 4m.3 7l2.463-5.541m1.228-2.764L16 11l.8 1.8M18 18h-5.1M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerLanguageOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
