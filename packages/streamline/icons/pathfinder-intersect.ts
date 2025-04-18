import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePathfinderIntersectIcon],svg[streamline-pathfinder-intersect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 12.5a1 1 0 0 1-1 1m0-9a1 1 0 0 1 1 1m-9 7a1 1 0 0 0 1 1m8-5.5v2M8 13.5h2M.5 1.5a1 1 0 0 1 1-1m7 0a1 1 0 0 1 1 1m-9 7a1 1 0 0 0 1 1M.5 6V4M4 .5h2m-.5 4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"></svg:path>`,
})
export class StreamlinePathfinderIntersectIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
