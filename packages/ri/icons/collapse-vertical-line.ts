import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCollapseVerticalLineIcon],svg[ri-collapse-vertical-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 13.5l4.95 4.95l-1.415 1.413l-2.536-2.535V23h-2v-5.672L8.467 19.86l-1.414-1.414zM11 1v5.67L8.464 4.135L7.05 5.55L12 10.5l4.95-4.95l-1.414-1.414L13 6.672V1z"></svg:path>`,
})
export class RiCollapseVerticalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
