import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPathfinderMergePathfinderMergeWorkIcon],svg[streamline-interface-edit-pathfinder-merge-pathfinder-merge-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 9.5h1a1 1 0 0 0 1-1v-1m0-3v-3a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h3m0 3a1 1 0 0 0 1 1m8-8a1 1 0 0 0-1-1m0 9a1 1 0 0 0 1-1m-4-8h.5m-2 9h2M13.5 8v2m-9-.5v.5"></svg:path>`,
})
export class StreamlineInterfaceEditPathfinderMergePathfinderMergeWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
