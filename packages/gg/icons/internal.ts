import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggInternalIcon],svg[gg-internal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m20.708 4.412l-10.25 10.287h3.59v2h-7v-7h2v3.58L19.293 3z"></svg:path><svg:path d="M11 4.706v2H5v12h12v-6h2v8H3v-16z"></svg:path></svg:g>`,
})
export class GgInternalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
