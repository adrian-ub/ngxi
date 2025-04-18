import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneSignpostIcon],svg[ic-twotone-signpost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6h11.17l1 1l-1 1H6zm12 10H6.83l-1-1l1-1H18z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M13 10h5l3-3l-3-3h-5V2h-2v2H4v6h7v2H6l-3 3l3 3h5v4h2v-4h7v-6h-7zM6 6h11.17l1 1l-1 1H6zm12 10H6.83l-1-1l1-1H18z"></svg:path>`,
})
export class IcTwotoneSignpostIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
