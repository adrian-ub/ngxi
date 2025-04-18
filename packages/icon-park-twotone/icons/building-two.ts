import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneBuildingTwoIcon],svg[icon-park-twotone-building-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTBuildingTwo0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m21 13l-10 7v24"></svg:path><svg:path fill="#555" fill-rule="evenodd" d="m21 4l10 7v13l7 5v15H21z" clip-rule="evenodd"></svg:path><svg:path d="M4 44h40"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTBuildingTwo0)"></svg:path>`,
})
export class IconParkTwotoneBuildingTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
