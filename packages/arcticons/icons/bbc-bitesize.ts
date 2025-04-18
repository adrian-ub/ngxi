import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBbcBitesizeIcon],svg[arcticons-bbc-bitesize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 15.331h6.858v24.415H5.5zm6.858-5.205h10.833v29.619H12.358zm11.147 1.285l10.363-3.157L42.5 36.587l-10.363 3.158z"></svg:path>`,
})
export class ArcticonsBbcBitesizeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
