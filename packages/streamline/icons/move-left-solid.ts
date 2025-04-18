import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMoveLeftSolidIcon],svg[streamline-move-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 0a1.5 1.5 0 0 0-1.5 1.5v11A1.5 1.5 0 0 0 10 14h2.5a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 12.5 0zM3.5 4.5a.5.5 0 0 0-.854-.354l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5A.5.5 0 0 0 3.5 9.5V8h3a1 1 0 0 0 0-2h-3z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineMoveLeftSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
