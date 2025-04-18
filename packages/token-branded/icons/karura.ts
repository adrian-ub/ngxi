import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedKaruraIcon],svg[token-branded-karura-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedKarura0)" d="m15.919 3l-5.541 5.035a3.13 3.13 0 0 1-2.096.814l-1.651.004l-.006-5.852H3.64v16.725h1.629c.91 0 1.76-.483 2.205-1.276l.01-.015c.295-.53.443-1.58.415-2.297c-.065-1.638-.328-2.064-.328-2.064c-.056 1.123-1.228 1.184-1.228 1.184c.834-.796.38-1.4.38-1.4c-1.478 1.052-1.846-.07-1.875-.172c.047.04.467.39 1.265-.704c.845-1.157 1.97-3.085 2.687-3.58c.718-.498 1.399-.457 1.399-.457s.392-.53 1.429-.972c1.036-.44 1.701.205 1.701.205c-1.06.855-2.5 2.259-2.58 4.272c-.064 1.628 3.446 4.422 2.83 8.55c.369-.937.517-1.876.39-3.038c-.101-.938-.706-2.897-.706-2.897l3.371 4.659h3.728l-7.286-10.01L20.361 3z"></svg:path><svg:path fill="url(#tokenBrandedKarura1)" d="M9.13 10.202c-.235.39-.235.51-.235.51s.822-.14 1.046-1.118c0 0-.525.135-.811.608"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedKarura0" x1="28.767" x2="14.923" y1="14.777" y2="-.271" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E40C5B"></svg:stop><svg:stop offset="1" stop-color="#FF4C3B"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedKarura1" x1="10.466" x2="9.607" y1="10.325" y2="9.385" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E40C5B"></svg:stop><svg:stop offset="1" stop-color="#FF4C3B"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedKaruraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
