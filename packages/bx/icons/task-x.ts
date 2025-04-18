import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxTaskXIcon],svg[bx-task-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2zM5 5h2v2h10V5h2v15H5z"></svg:path><svg:path fill="currentColor" d="M14.292 10.295L12 12.587l-2.292-2.292l-1.414 1.414l2.292 2.292l-2.292 2.292l1.414 1.414L12 15.415l2.292 2.292l1.414-1.414l-2.292-2.292l2.292-2.292z"></svg:path>`,
})
export class BxTaskXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
