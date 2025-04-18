import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFirstAidKitLineIcon],svg[ri-first-aid-kit-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4V2a1 1 0 0 1 1-1zm4 6H4v12h16zm-7 2v3h3v2h-3.001L13 17h-2l-.001-3H8v-2h3V9zm2-6H9v2h6z"></svg:path>`,
})
export class RiFirstAidKitLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
