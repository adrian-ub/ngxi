import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAlphabetArabicIcon],svg[tabler-alphabet-arabic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6v4m3 4h8q-2.518-3-4-3m-4-5v9.958c0 .963 0 1.444-.293 1.743S11.943 18 11 18h-1M7 6v9.958c0 .963 0 1.444-.293 1.743S5.943 18 5 18H4"></svg:path>`,
})
export class TablerAlphabetArabicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
