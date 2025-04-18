import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineOutgoingIcon],svg[icon-park-outline-outgoing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="M18 35a4 4 0 1 0-8 0a4 4 0 0 0 8 0Zm19 0a4 4 0 1 0-8 0a4 4 0 0 0 8 0Z"></svg:path><svg:path stroke-linecap="round" d="M4 35h6m8 0h11m8 0h7"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m38 19l6-6l-6-6M4 13h40"></svg:path></svg:g>`,
})
export class IconParkOutlineOutgoingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
