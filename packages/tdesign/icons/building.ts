import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBuildingIcon],svg[tdesign-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h10v3h3v4h2v2h-1v9h1v2H2v-2h1v-9H2V9h2V5h3zm2 3h6V4H9zm-4 6v9h3v-6h8v6h3v-9zm13-2V7H6v2zm-4 11v-4h-4v4z"></svg:path>`,
})
export class TdesignBuildingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
