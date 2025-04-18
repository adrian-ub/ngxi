import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenZilIcon],svg[token-zil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.646 4.154L15.7 9.01l2.648-1.165L8.278 3z"></svg:path><svg:path fill="currentColor" d="M5.646 4.153v2.621l7 3.372l-7 3.426v2.584L15.706 21v-2.594l-6.814-3.31l6.814-3.494V9.008L5.646 4.164zm10.061 4.841l2.647-1.15v2.595l-2.647 1.154zm0 11.986l2.647-1.154v-8.074l-2.647 1.165z"></svg:path>`,
})
export class TokenZilIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
