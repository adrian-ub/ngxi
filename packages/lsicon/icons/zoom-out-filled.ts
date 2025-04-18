import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconZoomOutFilledIcon],svg[lsicon-zoom-out-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 2a5.5 5.5 0 1 0 3.52 9.727l2.626 2.627l.708-.708l-2.627-2.626A5.5 5.5 0 0 0 7.5 2m-3 6h6V7h-6z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconZoomOutFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
