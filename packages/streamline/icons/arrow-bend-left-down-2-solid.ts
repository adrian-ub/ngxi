import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowBendLeftDown2SolidIcon],svg[streamline-arrow-bend-left-down-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 4a2 2 0 0 1 2-2H11a1 1 0 1 0 0-2H8.5a4 4 0 0 0-4 4v6h-2a.5.5 0 0 0-.354.854l3 3a.5.5 0 0 0 .708 0l3-3A.5.5 0 0 0 8.5 10h-2z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowBendLeftDown2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
