import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconFoldUp16Icon],svg[octicon-fold-up-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.823 1.677L4.927 4.573A.25.25 0 0 0 5.104 5H7.25v3.236a.75.75 0 1 0 1.5 0V5h2.146a.25.25 0 0 0 .177-.427L8.177 1.677a.25.25 0 0 0-.354 0M13.75 11a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm-3.75.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75M7.75 11a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zM4 11.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75M1.75 11a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class OcticonFoldUp16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
