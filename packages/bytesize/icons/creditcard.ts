import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeCreditcardIcon],svg[bytesize-creditcard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 7v18h28V7Zm3 11h4m-4 3h6"></svg:path><svg:path fill="currentColor" d="M2 11v2h28v-2Z"></svg:path></svg:g>`,
})
export class BytesizeCreditcardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
