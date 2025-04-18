import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBuildingThreeIcon],svg[icon-park-solid-building-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSBuildingThree0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" fill-rule="evenodd" stroke="#fff" d="m24 8l20 13v23H4V21z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" d="M20 44V23l-8 5v16m16 0V23l8 5v16"></svg:path><svg:path stroke="#fff" d="M41 44H8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSBuildingThree0)"></svg:path>`,
})
export class IconParkSolidBuildingThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
