import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSequenceFilledIcon],svg[tdesign-sequence-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h8v6H7v10H5V10H2zm12 0h8v6h-3v10h-2V10h-3zm-1.364 8.086L16.385 16l-3.75 3.914l-1.444-1.384L12.657 17H8v-2h4.657l-1.466-1.53z"></svg:path>`,
})
export class TdesignSequenceFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
