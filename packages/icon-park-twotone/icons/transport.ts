import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTransportIcon],svg[icon-park-twotone-transport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTransport0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:rect width="28" height="18" x="16" y="12" fill="#555" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke-linecap="round" d="M24 18v6m12-6v6"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M36 12V6H24v6m20 24H12a2 2 0 0 1-2-2V11a2 2 0 0 0-2-2H4"></svg:path><svg:path fill="#555" stroke-linecap="round" stroke-linejoin="round" d="M19 42a3 3 0 0 1-3-3v-3h6v3a3 3 0 0 1-3 3m18 0a3 3 0 0 1-3-3v-3h6v3a3 3 0 0 1-3 3"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTransport0)"></svg:path>`,
})
export class IconParkTwotoneTransportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
