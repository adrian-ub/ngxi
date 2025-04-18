import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiInboxIcon],svg[openmoji-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="M35 16h25v40H35z"></svg:path><svg:path fill="#D0CFCE" d="M60.053 56V28L35 56"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M35 16h25v40H35zm-5 20H11m13-6l6 6m-6 6l6-6"></svg:path>`,
})
export class OpenmojiInboxIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
