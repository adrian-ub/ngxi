import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconWarningIcon],svg[codicon-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.56 1h.88l6.54 12.26l-.44.74H1.44L1 13.26zM8 2.28L2.28 13H13.7zM8.625 12v-1h-1.25v1zm-1.25-2V6h1.25v4z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconWarningIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
