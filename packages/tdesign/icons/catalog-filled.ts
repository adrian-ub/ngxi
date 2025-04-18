import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCatalogFilledIcon],svg[tdesign-catalog-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1v22H3V1zm-5 6H8v2h8zm0 4H8v2h8zm0 4H8v2h8z"></svg:path>`,
})
export class TdesignCatalogFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
