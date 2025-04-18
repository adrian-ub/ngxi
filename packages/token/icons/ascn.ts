import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenAscnIcon],svg[token-ascn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 15.53v1.764h.588l3.53-4.118H7l3.235-4.411v-2.06h-.294l-5 6.471H4.06zm8.824 1.764v-4.118h.588V8.471c0-.589.353-1.765 1.764-1.765h7.06c.587 0 1.764.353 1.764 1.765v4.705h-.588v4.118h-1.765v-3.53h-7.059v3.53zM13.176 12h7.06V9.059c0-.194-.118-.588-.589-.588h-5.882c-.194 0-.589.117-.589.588z"></svg:path>`,
})
export class TokenAscnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
