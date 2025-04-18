import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTrainLineIcon],svg[ri-train-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.2 20l1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v11a2 2 0 0 1-2 2zM7 5a2 2 0 0 0-2 2v11h14V7a2 2 0 0 0-2-2zm5 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4M6 7h12v4H6z"></svg:path>`,
})
export class RiTrainLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
