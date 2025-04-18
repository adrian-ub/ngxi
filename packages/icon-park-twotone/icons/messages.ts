import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMessagesIcon],svg[icon-park-twotone-messages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMessages0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path fill="#555" d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"></svg:path><svg:path fill="#555" stroke-linecap="round" stroke-linejoin="round" d="M35 23c0 5.523-4.477 10-10 10H15V23c0-5.523 4.477-10 10-10s10 4.477 10 10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 21h6m-6 6h2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMessages0)"></svg:path>`,
})
export class IconParkTwotoneMessagesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
