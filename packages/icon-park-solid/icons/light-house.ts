import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidLightHouseIcon],svg[icon-park-solid-light-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSLightHouse0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" stroke-linecap="round" d="M6 44h36M17 20h14"></svg:path><svg:path fill="#fff" stroke="#fff" d="M19 20h10l3 24H16z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="m19 9l2 11h6l2-11"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="m32 12l-3-3l-5-5l-5 5l-3 3m21-5l3-3M11 7L8 4m29 15l3 3m-29-3l-3 3m30-9h4m-32 0H6"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M18 28h12m-13 8h14"></svg:path><svg:path stroke="#fff" d="m29 20l3 24M19 20l-3 24"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSLightHouse0)"></svg:path>`,
})
export class IconParkSolidLightHouseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
