import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAlphabetJapaneseIcon],svg[hugeicons-alphabet-japanese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.008 3C9.59 7 7.07 14 11.5 21"></svg:path><svg:path d="M3 5.32C6.706 6.198 15.177 6.637 21 4m-4.997 6c.495 3-3.463 9.5-8.85 9.956C.935 20.484 4.624 11 12.045 11.5c6.248.421 9.987 5.326 3.747 9.5"></svg:path></svg:g>`,
})
export class HugeiconsAlphabetJapaneseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
