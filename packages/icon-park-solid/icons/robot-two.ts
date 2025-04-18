import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRobotTwoIcon],svg[icon-park-solid-robot-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 35a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v7H5z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 18h-8l-6-6l6-6h8"></svg:path><svg:circle cx="8" cy="12" r="4" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 12h16m-18 4l8 17"></svg:path></svg:g>`,
})
export class IconParkSolidRobotTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
