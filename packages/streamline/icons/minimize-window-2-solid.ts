import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMinimizeWindow2SolidIcon],svg[streamline-minimize-window-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 2.5A2.5 2.5 0 0 1 2.5 0h9A2.5 2.5 0 0 1 14 2.5v9a2.5 2.5 0 0 1-2.5 2.5H7a1 1 0 1 1 0-2h4.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V7a1 1 0 0 1-2 0zm4.462 11.191A.5.5 0 0 1 4 14H.5a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .854-.354l1.042 1.043l4.397-4.396a1 1 0 0 1 1.414 1.414l-4.396 4.397l1.043 1.042a.5.5 0 0 1 .108.545" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineMinimizeWindow2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
