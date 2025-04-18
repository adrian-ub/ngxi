import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignRelationIcon],svg[tdesign-relation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.239 1.633L12 4.684l1.761-3.05l1.732 1l-2.338 4.05L19.11 17H23v2h-2.735l1.128 1.954l-1.732 1L17.956 19H6.044L4.34 21.954l-1.732-1L3.735 19H1v-2h3.89l5.955-10.316l-2.338-4.05zM12 8.684L7.199 17H16.8z"></svg:path>`,
})
export class TdesignRelationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
