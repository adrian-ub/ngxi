import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGiftIcon],svg[tdesign-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 22V6h-4.535A4 4 0 0 0 12 1.354A4 4 0 0 0 5.535 6H1v16zM13 4a2 2 0 1 1 4 0a2 2 0 0 1-4 0m1.414 4H21v6H3V8h6.586l-3 3L8 12.414l4-4l4 4L17.414 11zM3 16h18v4H3zm8-12a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class TdesignGiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
