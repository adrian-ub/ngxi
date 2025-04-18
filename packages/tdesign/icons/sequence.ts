import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSequenceIcon],svg[tdesign-sequence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h8v6H7v10H5V10H2zm6 4V6H4v2zm6-4h8v6h-3v10h-2V10h-3zm6 4V6h-4v2zm-7.364 4.086L16.385 16l-3.75 3.914l-1.444-1.384L12.657 17H8v-2h4.657l-1.466-1.53z"></svg:path>`,
})
export class TdesignSequenceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
