import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCornerUpRightDoubleLineIcon],svg[ri-corner-up-right-double-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10v9h2v-7h6.172l-3.95 3.95l1.414 1.414L16 11L9.636 4.636L8.222 6.05l3.95 3.95zm11.25-5.364L13.836 6.05l4.95 4.95l-4.95 4.95l1.414 1.414L21.614 11z"></svg:path>`,
})
export class RiCornerUpRightDoubleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
