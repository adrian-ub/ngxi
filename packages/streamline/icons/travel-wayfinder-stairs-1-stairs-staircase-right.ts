import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelWayfinderStairs1StairsStaircaseRightIcon],svg[streamline-travel-wayfinder-stairs-1-stairs-staircase-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5.5H9V5H5v4H.5v4.5h13V.5z"></svg:path>`,
})
export class StreamlineTravelWayfinderStairs1StairsStaircaseRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
