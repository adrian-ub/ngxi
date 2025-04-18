import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTextStrikethroughIcon],svg[hugeicons-text-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m-2.5-4.333C17.5 5.089 15.038 3 12 3S6.5 5.09 6.5 7.667c0 .486.053.93.167 1.333M6 16.333C6 18.911 8.686 21 12 21s6-1.333 6-4.667c0-2.393-1.03-3.755-3.092-4.333" color="currentColor"></svg:path>`,
})
export class HugeiconsTextStrikethroughIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
