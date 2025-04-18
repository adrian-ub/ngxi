import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faCreditCardAltIcon],svg[fa-credit-card-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1376V768h2304v608q0 66-47 113t-113 47H160q-66 0-113-47T0 1376m640-224v128h384v-128zm-384 0v128h256v-128zM2144 0q66 0 113 47t47 113v224H0V160Q0 94 47 47T160 0z"></svg:path>`,
})
export class FaCreditCardAltIcon {
  readonly viewBox = input("0 0 2304 1536")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
