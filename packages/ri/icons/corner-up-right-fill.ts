import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCornerUpRightFillIcon],svg[ri-corner-up-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10v9h2v-7h7.586v5.414L21 11l-6.414-6.414V10z"></svg:path>`,
})
export class RiCornerUpRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
