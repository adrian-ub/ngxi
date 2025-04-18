import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineBookmarkAddIcon],svg[ic-outline-bookmark-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11v6.97l-5-2.14l-5 2.14V5h6V3H7c-1.1 0-2 .9-2 2v16l7-3l7 3V11zm4-4h-2v2h-2V7h-2V5h2V3h2v2h2z"></svg:path>`,
})
export class IcOutlineBookmarkAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
