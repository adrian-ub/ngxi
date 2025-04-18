import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneRemoveRoadIcon],svg[ic-twotone-remove-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4h2v9h-2zM4 4h2v16H4zm7 0h2v4h-2zm0 6h2v4h-2zm0 6h2v4h-2zm11.5.41L21.09 15L19 17.09L16.91 15l-1.41 1.41l2.09 2.09l-2.09 2.09L16.91 22L19 19.91L21.09 22l1.41-1.41l-2.09-2.09z"></svg:path>`,
})
export class IcTwotoneRemoveRoadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
