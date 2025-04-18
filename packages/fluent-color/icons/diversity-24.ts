import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDiversity24Icon],svg[fluent-color-diversity-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDiversity240)" d="M17.625 12.745a1.25 1.25 0 0 0-1.25 0l-2.748 1.586a1.25 1.25 0 0 0-.625 1.083v3.172c0 .447.239.86.625 1.083l2.748 1.586a1.25 1.25 0 0 0 1.25 0l2.748-1.586a1.25 1.25 0 0 0 .625-1.083v-3.172c0-.447-.239-.86-.625-1.083z"></svg:path><svg:path fill="url(#fluentColorDiversity241)" d="M15.25 3A2.25 2.25 0 0 0 13 5.25v3.5A2.25 2.25 0 0 0 15.25 11h3.5A2.25 2.25 0 0 0 21 8.75v-3.5A2.25 2.25 0 0 0 18.75 3z"></svg:path><svg:path fill="url(#fluentColorDiversity242)" d="M7 13a4 4 0 1 0 0 8a4 4 0 0 0 0-8"></svg:path><svg:path fill="url(#fluentColorDiversity243)" d="M5.55 3.898a1.619 1.619 0 0 1 2.9 0l2.372 4.716C11.37 9.707 10.585 11 9.372 11H4.628c-1.213 0-1.999-1.293-1.45-2.386z"></svg:path><svg:defs><svg:lineargradient id="fluentColorDiversity240" x1="8.339" x2="19.212" y1="8.892" y2="20.111" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#52D17C"></svg:stop><svg:stop offset="1" stop-color="#22918B"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDiversity241" x1="9.667" x2="19.5" y1="-1" y2="11.75" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFCD0F"></svg:stop><svg:stop offset="1" stop-color="#FE8401"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDiversity242" x1="3" x2="11" y1="13" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDiversity243" x1="3.286" x2="8.807" y1="4.5" y2="10.236" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F24A9D"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDiversity24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
