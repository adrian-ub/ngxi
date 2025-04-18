import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBtseIcon],svg[token-branded-btse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedBtse0)" d="M12.373 17.4c1.527 0 2.407-.773 2.407-1.8c0-.952-.777-1.8-2.46-1.8H9v3.6zm-.673-7.2c1.527 0 2.33-.774 2.33-1.8c0-.951-.829-1.8-2.33-1.8H9v3.6zM4.2 3h8.69c2.277 0 3.882.786 4.943 1.813c.724.702 1.164 1.628 1.164 2.83v.049c0 2.03-1.19 3.23-2.794 3.907c2.2.702 3.597 1.903 3.597 4.282v.05c0 3.006-2.536 5.069-6.858 5.069H4.2z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedBtse0" x1="5.454" x2="19.897" y1="2.357" y2="20.842" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#007CD0"></svg:stop><svg:stop offset="1" stop-color="#004EAE"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedBtseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
