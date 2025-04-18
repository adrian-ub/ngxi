import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFlowerIcon],svg[hugeicons-flower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.5 12.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path d="M12 3c2.21 0 3.998 1.917 3.998 4.127Q16.48 7 17 7a4 4 0 0 1 1.712 7.616A4 4 0 1 1 12 18.938a4 4 0 1 1-6.712-4.322a4 4 0 0 1 2.714-7.49C8.002 4.918 9.791 3 12 3"></svg:path></svg:g>`,
})
export class HugeiconsFlowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
