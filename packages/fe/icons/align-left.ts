import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feAlignLeftIcon],svg[fe-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 21a1 1 0 0 1-2 0V3a1 1 0 1 1 2 0zm4-12a2 2 0 1 1 0-4h6a2 2 0 1 1 0 4zm0 3h4a2 2 0 1 1 0 4h-4a2 2 0 1 1 0-4"></svg:path>`,
})
export class FeAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
