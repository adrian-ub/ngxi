import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTextSubscriptIcon],svg[carbon-text-subscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 25h-6v-6h4v-2h-4v-2h6v6h-4v2h4zM5 7v2h7v16h2V9h7V7z"></svg:path>`,
})
export class CarbonTextSubscriptIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
