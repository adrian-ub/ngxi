import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHierarchyIcon],svg[picon-hierarchy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8H6V6h2M2 8H0V6h2m3-4H3V0h2m2 5H6V4H2v1H1V3h6"></svg:path>`,
})
export class PiconHierarchyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
