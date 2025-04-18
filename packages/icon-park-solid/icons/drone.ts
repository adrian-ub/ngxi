import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidDroneIcon],svg[icon-park-solid-drone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m12 12l7 7m17 17l-7-7m7-17l-7 7M12 36l7-7"></svg:path><svg:path fill="currentColor" d="M19 19h10v10H19z"></svg:path><svg:path d="M36 19a7 7 0 1 0-7-7m7 17a7 7 0 1 1-7 7m-17-7a7 7 0 1 0 7 7m-7-17a7 7 0 1 1 7-7"></svg:path></svg:g>`,
})
export class IconParkSolidDroneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
