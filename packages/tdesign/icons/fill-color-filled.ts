import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFillColorFilledIcon],svg[tdesign-fill-color-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.525.626L21.9 13L12 22.9L2.1 13l8.486-8.485L8.11 2.04zM5.93 12h12.142l-6.07-6.07zm14.82 5.39l1.315 1.66c.581.733.581 1.847 0 2.58a1.68 1.68 0 0 1-1.314.657c-.53 0-1-.26-1.314-.657c-.581-.733-.581-1.847 0-2.58z"></svg:path>`,
})
export class TdesignFillColorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
