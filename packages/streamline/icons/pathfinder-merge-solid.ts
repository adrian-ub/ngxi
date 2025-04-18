import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePathfinderMergeSolidIcon],svg[streamline-pathfinder-merge-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.5 0h-7A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10h1.254V6.5a.625.625 0 1 1 1.25 0v4.25L4 10.82v1.68A1.5 1.5 0 0 0 5.5 14h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 12.5 4H10V1.5A1.5 1.5 0 0 0 8.5 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePathfinderMergeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
