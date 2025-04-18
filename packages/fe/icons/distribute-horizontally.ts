import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feDistributeHorizontallyIcon],svg[fe-distribute-horizontally-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 21a1 1 0 0 1-2 0V3a1 1 0 1 1 2 0zm12 0a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0zm-5-4a2 2 0 1 1-4 0V7a2 2 0 1 1 4 0z"></svg:path>`,
})
export class FeDistributeHorizontallyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
