import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciSkipPreviousIcon],svg[ci-skip-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 18l-8.5-6L18 6v12ZM8 18H6V6h2v12Z"></svg:path>`,
})
export class CiSkipPreviousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
