import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconKebabHorizontal16Icon],svg[octicon-kebab-horizontal-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 9a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M1.5 9a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m13 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class OcticonKebabHorizontal16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
