import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxYenIcon],svg[bx-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.2 3.4L12 10.333L6.8 3.4L5.2 4.6L10 11H7v2h4v2H7v2h4v4h2v-4h4v-2h-4v-2h4v-2h-3l4.8-6.4z"></svg:path>`,
})
export class BxYenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
