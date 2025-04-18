import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBuildingHouseIcon],svg[bx-building-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2H9c-1.103 0-2 .897-2 2v5.586l-4.707 4.707A1 1 0 0 0 3 16v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2m-8 18H5v-5.586l3-3l3 3zm8 0h-6v-4a.999.999 0 0 0 .707-1.707L9 9.586V4h10z"></svg:path><svg:path fill="currentColor" d="M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 1h2v2H7z"></svg:path>`,
})
export class BxBuildingHouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
