import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePathfinderExcludeSolidIcon],svg[streamline-pathfinder-exclude-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 0h7A1.5 1.5 0 0 1 10 1.5V4h2.5A1.5 1.5 0 0 1 14 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 4 12.5V10H1.5A1.5 1.5 0 0 1 0 8.5v-7A1.5 1.5 0 0 1 1.5 0M5 9h3.5a.5.5 0 0 0 .5-.5V5H5.5a.5.5 0 0 0-.5.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePathfinderExcludeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
