import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFillColorIcon],svg[tdesign-fill-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.525.626l.707.707l2.475 2.475l8.485 8.485l.708.707l-.707.707l-8.486 8.486L12 22.9l-.707-.707l-8.485-8.486L2.1 13l.707-.707l7.778-7.778l-1.768-1.768l-.707-.707zM5.93 12h12.142l-6.07-6.07zm12.142 2H5.93L12 20.071zm2.679 3.39l.784.99l.53.67c.581.733.581 1.847 0 2.58a1.68 1.68 0 0 1-1.314.657c-.53 0-1-.26-1.314-.657c-.581-.733-.581-1.847 0-2.58l.53-.67z"></svg:path>`,
})
export class TdesignFillColorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
