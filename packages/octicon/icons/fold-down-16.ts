import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconFoldDown16Icon],svg[octicon-fold-down-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.177 14.323l2.896-2.896a.25.25 0 0 0-.177-.427H8.75V7.764a.75.75 0 1 0-1.5 0V11H5.104a.25.25 0 0 0-.177.427l2.896 2.896a.25.25 0 0 0 .354 0M2.25 5a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5zM6 4.25a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1 0-1.5h.5a.75.75 0 0 1 .75.75M8.25 5a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5zM12 4.25a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1 0-1.5h.5a.75.75 0 0 1 .75.75m2.25.75a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5z"></svg:path>`,
})
export class OcticonFoldDown16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
