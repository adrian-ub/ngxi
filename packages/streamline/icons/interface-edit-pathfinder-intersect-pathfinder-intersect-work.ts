import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPathfinderIntersectPathfinderIntersectWorkIcon],svg[streamline-interface-edit-pathfinder-intersect-pathfinder-intersect-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 8.5a1 1 0 0 0 1 1m0-9a1 1 0 0 0-1 1m9 0a1 1 0 0 0-1-1M4 .5h2M.5 4v2m4 6.5a1 1 0 0 0 1 1m8-8a1 1 0 0 0-1-1m0 9a1 1 0 0 0 1-1m-5.5 1h2M13.5 8v2m-4-1.5v-4h-4a1 1 0 0 0-1 1v4h4a1 1 0 0 0 1-1Z"></svg:path>`,
})
export class StreamlineInterfaceEditPathfinderIntersectPathfinderIntersectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
