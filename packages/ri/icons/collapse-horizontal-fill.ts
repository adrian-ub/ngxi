import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCollapseHorizontalFillIcon],svg[ri-collapse-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.5 12l4.95-4.95l-.001 3.95H23v2h-4.552v3.947zM1 13h4.55v3.95L10.5 12L5.55 7.05V11H1z"></svg:path>`,
})
export class RiCollapseHorizontalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
