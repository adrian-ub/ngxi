import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAlphabetKoreanIcon],svg[hugeicons-alphabet-korean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 6h6.155c.868 0 1.302 0 1.598.317c.297.318.27.704.218 1.477C12.726 11.383 10.879 17.016 5 19M16 3v9m0 9v-9m0 0h3" color="currentColor"></svg:path>`,
})
export class HugeiconsAlphabetKoreanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
