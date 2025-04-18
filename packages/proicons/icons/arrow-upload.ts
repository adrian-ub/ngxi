import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsArrowUploadIcon],svg[proicons-arrow-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 16.349V3.87M6.118 9.132l4.821-4.821c.293-.293.677-.44 1.061-.44m5.882 5.261l-4.821-4.821A1.5 1.5 0 0 0 12 3.87m8.75 12.645v.935a3.3 3.3 0 0 1-3.3 3.3H6.55a3.3 3.3 0 0 1-3.3-3.3v-.935"></svg:path>`,
})
export class ProiconsArrowUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
