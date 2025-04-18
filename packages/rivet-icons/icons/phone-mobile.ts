import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsPhoneMobileIcon],svg[rivet-icons-phone-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 13h4v-2H6z"></svg:path><svg:path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.5 3h1a2 2 0 0 0 1.732-1H12v12H4V2h1.768A2 2 0 0 0 7.5 3"></svg:path></svg:g>`,
})
export class RivetIconsPhoneMobileIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
