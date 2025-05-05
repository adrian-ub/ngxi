import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHeavierIcon],svg[picon-heavier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 4L6 1L4.5 4m-1 3L2 2L.5 7M7 5H5L4 4l2-4l2 4M3 8H1L0 7l2-6l2 6M0 2l4-2h4"></svg:path>`,
})
export class PiconHeavierIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
