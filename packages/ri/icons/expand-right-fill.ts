import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExpandRightFillIcon],svg[ri-expand-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 5l7 7l-7 7v-6H8v-2h6zM4 19V5h2v14z"></svg:path>`,
})
export class RiExpandRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
