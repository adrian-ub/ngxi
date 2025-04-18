import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStarMinusOutlineIcon],svg[mdi-star-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.8 21l1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-3.2 2.8H18c-.7 0-1.4.1-2.1.4l2.2-1.9l-4.4-.4l-1.7-4l-1.7 4l-4.4.4l3.3 2.9l-1 4.3l3.8-2.3l.5.3c-.2.5-.4 1.1-.4 1.6zm8.2-4v2h8v-2z"></svg:path>`,
})
export class MdiStarMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
