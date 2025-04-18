import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSendBackwardIcon],svg[icon-park-outline-send-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 14h36V6H6zm0 14h36v-8H6z"></svg:path><svg:path stroke-linecap="round" d="m30 36l-6 6l-6-6v0m6 6V28m0-14v6"></svg:path></svg:g>`,
})
export class IconParkOutlineSendBackwardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
