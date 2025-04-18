import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBadgerIcon],svg[token-branded-badger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#0C0B11" d="M5.333 15.595V14.55l13.334-.161v1.206h-.556v.572h-.556v.555H17v.467h-.556v.555h-.555v.534H8.11v-.534h-.556v-.555H7v-.472h-.556v-.556H5.89v-.567z"></svg:path><svg:path fill="#EDECE8" d="M17 3.111H7v-.555h-.556V2h-1.11v.556H4.221v2.777h.556V7h-.556v1.111h-.555v1.667H3.11V12h.556v1.111h.555v.556h.556v.555h.555v.556h.556v.555h.555v.556H7v.556h.556V17h.555v1.667h7.778V17h.555v-.555H17v-.556h.555v-.556h.556v-.555h.556v-.556h.555v-.555h.556v-.556h.555V12h.556V9.778h-.556V8.11h-.555V7h-.556V5.567h.55l.006-2.078v-.933h-1.111V2h-1.112v.556H17z"></svg:path><svg:path fill="#0C0B11" d="M15.333 2.556H8.666v.555h-.555v.556H6.444V3.11H5.333v.556H4.222v2.222h.555V7h.556v.556h.556v2.777h.555V12H7v2.222h.555v1.111h.556v1.112h.555v2.31l1.111 2.134h.556v.555h.556V22h2.222v-.556h.555v-.555h.556l1.111-2.222v-2.222h.556v-1.112h.555v-1.11H17V12h.555v-1.661h.556V7.556h.555V7h.556V5.889h.555V3.667h-1.11v-.495h-1.112v.495H15.89V3.11h-.556z"></svg:path><svg:path fill="#EDECE8" d="M14.222 2.556H9.778v1.11h.555v.556h-.555v1.111h.555v1.111h-.555v6.112h.555v2.777h-.555v2.778h-.556v.556h-.555v1.11h.555v1.112h.556v-1.667h.555v-.555h3.334v.555h.555v1.667h.556v-1.111h.555v-1.111h-.555v-.556h-.556v-2.778h-.555v-2.777h.555V6.444h-.555v-1.11h.555V4.221h-.555v-.555h.555z"></svg:path><svg:path fill="#000" d="M9.222 13.111H8.127v.578h-.572v1.089h.572v.555h1.095v-.555h.555v-1.09h-.555zm6.667 0h-1.095v.578h-.572v1.089h.572v.555h1.095v-.555h.555v-1.09h-.555z"></svg:path><svg:path fill="#fff" d="M8.11 13.667h.556v.555h-.555zm6.668 0h.555v.555h-.556z"></svg:path></svg:g>`,
})
export class TokenBrandedBadgerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
