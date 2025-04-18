import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsArrowToLeftIcon],svg[bxs-arrow-to-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h2v12H4zm10 7h6v-2h-6V6l-6 6l6 6z"></svg:path>`,
})
export class BxsArrowToLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
