import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneInboxOutIcon],svg[icon-park-twotone-inbox-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTInboxOut0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M4 30L9 6h30l5 24"></svg:path><svg:path fill="#555" d="M4 30h10.91l1.817 6h14.546l1.818-6H44v13H4z"></svg:path><svg:path stroke-linecap="round" d="m18 20l6-6l6 6m-6 6V14"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTInboxOut0)"></svg:path>`,
})
export class IconParkTwotoneInboxOutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
