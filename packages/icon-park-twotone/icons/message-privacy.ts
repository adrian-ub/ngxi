import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMessagePrivacyIcon],svg[icon-park-twotone-message-privacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMessagePrivacy0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M25.5 37H21l-10 5v-5H4V7h40v11"></svg:path><svg:path fill="#555" d="M30 27h14v8H30z"></svg:path><svg:path d="M40 27v-3a3 3 0 1 0-6 0v3M12 15h6m-6 6h12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMessagePrivacy0)"></svg:path>`,
})
export class IconParkTwotoneMessagePrivacyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
