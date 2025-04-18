import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBankCircleIcon],svg[mdi-bank-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m5 15H7v-2h10zm-9-3v-3h2v3zm3 0v-3h2v3zm3 0v-3h2v3zm3-4H7V8.5L12 6l5 2.5z"></svg:path>`,
})
export class MdiBankCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
