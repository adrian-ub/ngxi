import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBankOffOutlineIcon],svg[mdi-bank-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.8 22.7L19.1 21H2v-2h15.1l-4.6-4.6V17h-2v-4.6L6.1 8H2V6l1.4-.7L1.1 3l1.3-1.3l19.7 19.7zM4.5 10v7h2v-7zm7-6.7L16.7 6H9.2l2 2H21V6l-9.5-5l-4.8 2.5L8.2 5zm7 12V10h-2v3.3z"></svg:path>`,
})
export class MdiBankOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
