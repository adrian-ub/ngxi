import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidFactoryBuildingIcon],svg[icon-park-solid-factory-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSFactoryBuilding0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M4 44V4h8v16l16-8v8l16-8v32z"></svg:path><svg:path fill="#000" stroke="#000" d="M12 28h8v8h-8zm16 0h8v8h-8z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSFactoryBuilding0)"></svg:path>`,
})
export class IconParkSolidFactoryBuildingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
