import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFactoryBuildingIcon],svg[icon-park-outline-factory-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 44V4h8v16l16-8v8l16-8v32z"></svg:path><svg:path d="M12 28h8v8h-8zm16 0h8v8h-8z"></svg:path></svg:g>`,
})
export class IconParkOutlineFactoryBuildingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
