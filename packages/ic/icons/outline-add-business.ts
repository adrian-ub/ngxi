import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineAddBusinessIcon],svg[ic-outline-add-business-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h15v2H2zm13 13h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4zm-6 1H4v-4h5zm-5.96-6l.6-3h11.72l.6 3z"></svg:path><svg:path fill="currentColor" d="M23 18h-3v-3h-2v3h-3v2h3v3h2v-3h3z"></svg:path>`,
})
export class IcOutlineAddBusinessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
