import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCollapseVerticalFillIcon],svg[ri-collapse-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 13.5l4.95 4.95l-3.95-.002V23h-2v-4.552l-3.948-.001zM11 1v4.55H7.05L12 10.5l4.95-4.95H13V1z"></svg:path>`,
})
export class RiCollapseVerticalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
