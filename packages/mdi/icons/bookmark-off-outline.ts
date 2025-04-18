import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBookmarkOffOutlineIcon],svg[mdi-bookmark-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.28 4L2 5.27l3 3V21l7-3l4.78 2.05L18.73 22L20 20.72zM7 18v-7.73l6 5.98l-1-.43zM7 5.16L5.5 3.67C5.88 3.26 6.41 3 7 3h10a2 2 0 0 1 2 2v12.16l-2-2V5H7z"></svg:path>`,
})
export class MdiBookmarkOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
