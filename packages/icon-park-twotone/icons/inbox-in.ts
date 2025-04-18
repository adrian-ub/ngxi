import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneInboxInIcon],svg[icon-park-twotone-inbox-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTInboxIn0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="m5 30l5-24h28l5 24"></svg:path><svg:path fill="#555" d="M5 30h9.91l1.817 6h14.546l1.818-6H43v13H5z"></svg:path><svg:path stroke-linecap="round" d="m18 20l6 6l6-6m-6 6V14"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTInboxIn0)"></svg:path>`,
})
export class IconParkTwotoneInboxInIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
