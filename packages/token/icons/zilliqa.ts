import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenZilliqaIcon],svg[token-zilliqa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.647 4.155l10.054 4.854l2.645-1.165L8.278 3z"></svg:path><svg:path fill="currentColor" d="M5.647 4.156v2.62l6.999 3.372l-6.999 3.425v2.583L15.706 21v-2.594l-6.814-3.309l6.814-3.492V9.011L5.647 4.166zm10.059 4.838l2.647-1.149v2.594l-2.647 1.154zm0 11.985l2.647-1.155v-8.07l-2.647 1.163z"></svg:path>`,
})
export class TokenZilliqaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
