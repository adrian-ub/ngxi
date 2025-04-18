import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShuffleSolidIcon],svg[streamline-shuffle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.854 1.646A.5.5 0 0 0 11 2v1H8.5a1 1 0 1 0 0 2H11v1a.5.5 0 0 0 .854.354l2-2a.5.5 0 0 0 0-.708zM0 4a1 1 0 0 1 1-1h3.25a1 1 0 0 1 .832.445L8.785 9H11V8a.5.5 0 0 1 .854-.354l2 2a.5.5 0 0 1 0 .708l-2 2A.5.5 0 0 1 11 12v-1H8.25a1 1 0 0 1-.832-.445L3.715 5H1a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShuffleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
