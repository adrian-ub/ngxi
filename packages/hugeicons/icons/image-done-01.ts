import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsImageDone01Icon],svg[hugeicons-image-done-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.5 3C7.022 3 4.782 3 3.391 4.391S2 8.021 2 12.501c0 4.478 0 6.717 1.391 8.108S7.021 22 11.5 22c4.478 0 6.718 0 8.109-1.391S21 16.979 21 12.5c0-1.36 0-2.514-.039-3.5"></svg:path><svg:path d="M4.5 21.5c4.372-5.225 9.274-12.116 16.498-7.457M14 6s1 0 2 2c0 0 3.177-5 6-6"></svg:path></svg:g>`,
})
export class HugeiconsImageDone01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
