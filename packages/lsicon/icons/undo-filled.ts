import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconUndoFilledIcon],svg[lsicon-undo-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 3a5 5 0 0 0-4.325 2.489H5.49v1h-3.5V3.01h1V4.7a6 6 0 1 1 .282 6.993l.787-.615A5 5 0 1 0 8 3" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUndoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
