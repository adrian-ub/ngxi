import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenSendIcon],svg[token-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.4 8.1H6.6v-3h10.734c1.02 0 3.066.6 3.066 3m-13.8 0v1.542c0 .258.15.858.75.858H18c1.002 0 3 .378 3 2.226v3.858c0 .516-.6 2.316-3 2.316H6c-1.002 0-3-.504-3-2.97h14.25c.252 0 .75-.312.75-.93v-.6c0-.258-.15-.9-.75-.9H5.1c-.75 0-1.5-.306-1.5-1.542V8.1z"></svg:path>`,
})
export class TokenSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
