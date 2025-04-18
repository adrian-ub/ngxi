import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsBookmarkAltPlusIcon],svg[bxs-bookmark-alt-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 2h-12C4.57 2 3 3.57 3 5.5V22l7-3.5l7 3.5v-9h5V5.5C22 3.57 20.43 2 18.5 2M13 11h-2v2H9v-2H7V9h2V7h2v2h2zm7 0h-3V5.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5z"></svg:path>`,
})
export class BxsBookmarkAltPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
