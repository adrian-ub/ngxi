import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneStoreMallDirectoryIcon],svg[ic-twotone-store-mall-directory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.64 9l-.6 3h13.92l-.6-3z" opacity=".3"></svg:path><svg:path fill="currentColor" d="m4 7l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zm8 11H6v-4h6zm-6.96-6l.6-3h12.72l.6 3zM4 4h16v2H4z"></svg:path>`,
})
export class IcTwotoneStoreMallDirectoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
