import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons1by1Icon],svg[arcticons-1by1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.496 40.331S38.607 32.791 43.5 24C38.607 15.208 27.496 7.668 27.496 7.668zM7.634 19.986H4.5v-8.828s7.313-3.49 12.993-3.49l-.01 32.664H7.634Z"></svg:path>`,
})
export class Arcticons1by1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
