import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignThumbDownFilledIcon],svg[tdesign-thumb-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.879 22.617l1.279-.213A4 4 0 0 0 15.5 18.46V16h5.32a2 2 0 0 0 1.972-2.329l-1.666-10A2 2 0 0 0 19.153 2H7v11.198zM4 14V2H2v12z"></svg:path>`,
})
export class TdesignThumbDownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
