import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneRvHookupIcon],svg[ic-twotone-rv-hookup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="icTwotoneRvHookup0" fill="currentColor" d="M20 17v-6c0-1.1-.9-2-2-2H7V7l-3 3l3 3v-2h4v3H4v3c0 1.1.9 2 2 2h2c0 1.66 1.34 3 3 3s3-1.34 3-3h8v-2zm-9 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m7-6h-4v-3h4zM17 2v2H9v2h8v2l3-3z"></svg:path></svg:defs><svg:use href="#icTwotoneRvHookup0" opacity=".3"></svg:use><svg:use href="#icTwotoneRvHookup0"></svg:use>`,
})
export class IcTwotoneRvHookupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
