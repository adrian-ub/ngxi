import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCircleWarningFilledIcon],svg[lsicon-circle-warning-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m-.5 2v7h1V3zm.5 8a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCircleWarningFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
