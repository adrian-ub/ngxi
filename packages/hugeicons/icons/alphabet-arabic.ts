import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAlphabetArabicIcon],svg[hugeicons-alphabet-arabic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 4v7m4 3h7.743c.706 0 1.059 0 1.205-.26s-.028-.524-.376-1.053C20.452 10.984 18.784 10 17.117 10M13 4v13.667c0 1.1 0 1.65-.293 1.991S11.943 20 11 20h-1M5 4v13.667c0 1.1 0 1.65-.293 1.991S3.943 20 3 20H2" color="currentColor"></svg:path>`,
})
export class HugeiconsAlphabetArabicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
