import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosWaypointIconIcon],svg[logos-waypoint-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#14C6CB" d="m256 0l-31.961 55.366L192.078 0zM85.344 36.952H64.016l53.32 92.381l-21.328 36.952L0 0h106.672l53.351 92.38l10.664-18.475L128 0h42.687l21.328 36.952l21.329 36.953l-53.32 92.38z"></svg:path>`,
})
export class LogosWaypointIconIcon {
  readonly viewBox = input("0 0 256 167")
  readonly width = input("1.54em")
  readonly height = input("1em")
}
