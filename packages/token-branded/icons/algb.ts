import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAlgbIcon],svg[token-branded-algb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#B41870" d="M11.735 3.529V14.91L3 19.941z"></svg:path><svg:path fill="#00CAB2" d="M12.265 3.529V14.91L21 19.941z"></svg:path><svg:path fill="#5D32ED" d="m12 15.442l-8.735 5.03h17.47z"></svg:path></svg:g>`,
})
export class TokenBrandedAlgbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
