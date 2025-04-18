import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStarMinusIcon],svg[mdi-star-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.8 21l1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-3.2 2.8H18c-3.1 0-5.6 2.3-6 5.3zm8.2-4v2h8v-2z"></svg:path>`,
})
export class MdiStarMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
