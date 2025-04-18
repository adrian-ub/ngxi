import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTextColorIcon],svg[hugeicons-text-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 21h18m-2-3l-3.375-8.842C14.057 5.053 13.274 3 12 3S9.943 5.053 8.375 9.158L5 18m3-7h8" color="currentColor"></svg:path>`,
})
export class HugeiconsTextColorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
