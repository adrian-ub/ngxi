import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBookmarkAltIcon],svg[meteor-icons-bookmark-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 22H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h13zM4 19a3 3 0 0 1 3-3h13M10 2v10l3-2l3 2V2z"></svg:path>`,
})
export class MeteorIconsBookmarkAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
