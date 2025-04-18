import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSpaceIcon],svg[tdesign-space-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9v5h18V9h2v7H1V9z"></svg:path>`,
})
export class TdesignSpaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
