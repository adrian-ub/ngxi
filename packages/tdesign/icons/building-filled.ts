import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBuildingFilledIcon],svg[tdesign-building-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h10v3h3v4H4V5h3zm15 11v-2H2v2h1v7H2v2h6v-6h8v6h6v-2h-1v-7z"></svg:path><svg:path fill="currentColor" d="M14 22h-4v-4h4z"></svg:path>`,
})
export class TdesignBuildingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
