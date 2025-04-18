import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUsbMemory01Icon],svg[hugeicons-usb-memory-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m4.038 12.539l5.938-5.94c1.4-1.4 2.1-2.099 2.97-2.099s1.57.7 2.97 2.1L17.4 8.085c1.4 1.4 2.1 2.1 2.1 2.969c0 .87-.7 1.57-2.1 2.97l-5.939 5.938a5.25 5.25 0 0 1-7.423-7.423"></svg:path><svg:path d="M8.5 17a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m6-11.65l1.383-1.383C16.861 2.99 17.35 2.5 17.958 2.5s1.097.489 2.075 1.467S21.5 5.434 21.5 6.042s-.489 1.097-1.467 2.075L18.65 9.5"></svg:path></svg:g>`,
})
export class HugeiconsUsbMemory01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
