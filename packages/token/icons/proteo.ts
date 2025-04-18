import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenProteoIcon],svg[token-proteo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="tokenProteo0" fill="currentColor" d="m10.096 5.861l-3.78 5.665L12 21l5.684-9.474l-3.78-5.665l1.118 5.665h1.331l-3.88 7.106v-7.106h1.218L12.02 3.024L12 3l-.019.024l-1.672 8.502h1.218v7.106l-3.885-7.106h1.336z"></svg:path></svg:defs><svg:use href="#tokenProteo0"></svg:use><svg:use href="#tokenProteo0"></svg:use>`,
})
export class TokenProteoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
