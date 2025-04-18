import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBankCircleOutlineIcon],svg[mdi-bank-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c4.4 0 8 3.6 8 8s-3.6 8-8 8s-8-3.6-8-8s3.6-8 8-8m0-2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m5 15H7v-2h10zm-9-3v-3h2v3zm3 0v-3h2v3zm3 0v-3h2v3zm3-4H7V8.5L12 6l5 2.5z"></svg:path>`,
})
export class MdiBankCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
