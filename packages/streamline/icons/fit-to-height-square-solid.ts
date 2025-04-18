import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFitToHeightSquareSolidIcon],svg[streamline-fit-to-height-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 10.5A3.5 3.5 0 0 0 3.5 14h7a3.5 3.5 0 0 0 3.5-3.5v-7A3.5 3.5 0 0 0 10.5 0h-7A3.5 3.5 0 0 0 0 3.5zM6.25 6v2H5a.5.5 0 0 0-.354.854l2 2a.5.5 0 0 0 .708 0l2-2A.5.5 0 0 0 9 8H7.75V6H9a.5.5 0 0 0 .354-.854l-2-2a.5.5 0 0 0-.708 0l-2 2A.5.5 0 0 0 5 6z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineFitToHeightSquareSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
