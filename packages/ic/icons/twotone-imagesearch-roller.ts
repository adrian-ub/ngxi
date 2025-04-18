import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneImagesearchRollerIcon],svg[ic-twotone-imagesearch-roller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4h10v2H8zm4 13h2v4h-2z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M20 7V3c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h8v3h-1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1h-1v-3c0-1.1-.9-2-2-2H4V6h2v1c0 .55.45 1 1 1h12c.55 0 1-.45 1-1M8 4h10v2H8zm6 17h-2v-4h2z"></svg:path>`,
})
export class IcTwotoneImagesearchRollerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
