import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCornerUpLeftDoubleLineIcon],svg[ri-corner-up-left-double-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10v9h-2v-7h-6.172l3.95 3.95l-1.414 1.414L8 11l6.364-6.364l1.414 1.414l-3.95 3.95zM8.75 4.636l1.414 1.414L5.214 11l4.95 4.95l-1.414 1.414L2.386 11z"></svg:path>`,
})
export class RiCornerUpLeftDoubleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
