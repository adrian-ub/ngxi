import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKnife01Icon],svg[hugeicons-knife-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.387 8.116h.008m-3.293 8.629c2.788-3.027 4.727-5.417 5.938-7.044c.663-.89.995-1.336.957-1.943C21.92 6.49 18.725 3 17.32 3c-.643 0-1.16.537-2.195 1.612L2.55 17.672a2.003 2.003 0 0 0 0 2.757c.831.863 2.213.73 2.877-.278l2.29-3.475c.918-1.394 1.577-1.402 2.678-.259c.665.691 1.505 1.978 2.553 1.966c.653-.008 1.153-.551 2.154-1.638" color="currentColor"></svg:path>`,
})
export class HugeiconsKnife01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
