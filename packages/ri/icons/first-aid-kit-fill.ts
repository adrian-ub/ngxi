import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFirstAidKitFillIcon],svg[ri-first-aid-kit-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4V2a1 1 0 0 1 1-1zm-3 8h-2v3H8v2h2.999L11 17h2l-.001-3H16v-2h-3zm2-6H9v2h6z"></svg:path>`,
})
export class RiFirstAidKitFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
