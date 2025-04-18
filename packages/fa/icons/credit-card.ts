import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faCreditCardIcon],svg[fa-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1760 0q66 0 113 47t47 113v1216q0 66-47 113t-113 47H160q-66 0-113-47T0 1376V160Q0 94 47 47T160 0zM160 128q-13 0-22.5 9.5T128 160v224h1664V160q0-13-9.5-22.5T1760 128zm1600 1280q13 0 22.5-9.5t9.5-22.5V768H128v608q0 13 9.5 22.5t22.5 9.5zM256 1280v-128h256v128zm384 0v-128h384v128z"></svg:path>`,
})
export class FaCreditCardIcon {
  readonly viewBox = input("0 0 1920 1536")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
