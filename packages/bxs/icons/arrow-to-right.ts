import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsArrowToRightIcon],svg[bxs-arrow-to-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6h2v12h-2zm-8 5H4v2h6v5l6-6l-6-6z"></svg:path>`,
})
export class BxsArrowToRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
