import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShipIcon],svg[icon-park-solid-ship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M6 20.377L24 14l18 6.377L36.667 34H11.333z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13 8h22l-.002 9.896L24 14l-11 3.896z"></svg:path><svg:path stroke-linecap="round" d="M24 8V4m0 20v-8M10 40l3.5 4l3.5-4l3.5 4l3.5-4l3.5 4l3.5-4l3.5 4l3.5-4"></svg:path></svg:g>`,
})
export class IconParkSolidShipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
