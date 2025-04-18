import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPrism01Icon],svg[hugeicons-prism-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15.58 8l-.593-1.15C13.664 4.283 13.002 3 12 3s-1.664 1.283-2.987 3.85L4.59 15.427c-1.28 2.481-1.92 3.721-1.423 4.647S4.97 21 7.578 21h8.844c2.609 0 3.913 0 4.41-.926c.496-.926-.143-2.166-1.422-4.647l-.35-.678M8 10l14-3M8 10l13.462 1.5M8 10l14 6M8 10l-6 1" color="currentColor"></svg:path>`,
})
export class HugeiconsPrism01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
