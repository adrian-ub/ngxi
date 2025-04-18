import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconKebabHorizontalIcon],svg[octicon-kebab-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3zM13 7.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z" fill="currentColor"></svg:path>`,
})
export class OcticonKebabHorizontalIcon {
  readonly viewBox = input("0 0 13 16")
  readonly width = input("0.82em")
  readonly height = input("1em")
}
