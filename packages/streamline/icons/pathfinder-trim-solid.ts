import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePathfinderTrimSolidIcon],svg[streamline-pathfinder-trim-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.5 0h-7A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10h1.25V5.5A2.75 2.75 0 0 1 5.5 2.75H10V1.5A1.5 1.5 0 0 0 8.5 0m-3 4h7A1.5 1.5 0 0 1 14 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 4 12.5v-7A1.5 1.5 0 0 1 5.5 4" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePathfinderTrimSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
