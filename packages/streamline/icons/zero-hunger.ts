import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineZeroHungerIcon],svg[streamline-zero-hunger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.858 6.612h12.007a6 6 0 0 1-3.43 5.426v1.078H4.287v-1.078a6 6 0 0 1-3.43-5.426ZM10.499.858c-.858 1.231 1.286 2.462.429 3.693M6.633.858C5.775 2.09 7.919 3.32 7.06 4.551M2.78.858c-.858 1.231 1.286 2.462.429 3.693"></svg:path>`,
})
export class StreamlineZeroHungerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
