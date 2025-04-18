import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laHeadingIcon],svg[la-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5v2h1v18H6v2h8v-2h-1v-6h6v6h-1v2h8v-2h-1V7h1V5h-8v2h1v6h-6V7h1V5zm3 2h2v8h10V7h2v18h-2v-8H11v8H9z"></svg:path>`,
})
export class LaHeadingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
