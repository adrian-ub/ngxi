import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelWayfinderStairs2StairsStaircaseLeftIcon],svg[streamline-travel-wayfinder-stairs-2-stairs-staircase-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5.5H5V5h4v4h4.5v4.5H.5V.5z"></svg:path>`,
})
export class StreamlineTravelWayfinderStairs2StairsStaircaseLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
