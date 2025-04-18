import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneReceiverIcon],svg[icon-park-twotone-receiver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTReceiver0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M9.858 38.142c7.81 7.81 20.474 7.81 28.284 0L9.858 9.858c-7.81 7.81-7.81 20.474 0 28.284"></svg:path><svg:path d="m33.9 33.9l5.27-21.986M24 24l13.172-13.172M14.1 14.1l21.986-5.27"></svg:path><svg:path fill="#555" d="M44 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTReceiver0)"></svg:path>`,
})
export class IconParkTwotoneReceiverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
