import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsPaddleIcon],svg[lineicons-paddle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.026 9.294v-.707a3.27 3.27 0 0 0 3.268-3.268h.654a3.27 3.27 0 0 0 3.268 3.272V9.3a3.27 3.27 0 0 0-3.268 3.268h-.654a3.27 3.27 0 0 0-3.268-3.273m3.268-5.202h5.62c2.746 0 4.707 1.96 4.707 4.837s-1.96 4.836-4.706 4.836h-5.62V22h2.352v-6.143h3.268c3.948 0 7.059-3.112 7.059-6.928c0-3.817-3.111-6.929-7.06-6.929h-5.62z"></svg:path>`,
})
export class LineiconsPaddleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
