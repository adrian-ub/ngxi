import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCoverageFilledIcon],svg[lsicon-coverage-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.793 2.045a.5.5 0 0 1 .414 0l5.5 2.5a.5.5 0 0 1 0 .91L11.408 6.5l2.299 1.045a.5.5 0 0 1 0 .91L11.408 9.5l2.299 1.045a.5.5 0 0 1 0 .91l-5.5 2.5a.5.5 0 0 1-.414 0l-5.5-2.5a.5.5 0 0 1 0-.91L4.592 9.5L2.293 8.455a.5.5 0 0 1 0-.91L4.592 6.5L2.293 5.455a.5.5 0 0 1 0-.91zM5.8 10.049L3.708 11L8 12.95L12.292 11l-2.092-.95l-1.993.905a.5.5 0 0 1-.414 0zM3.708 5L8 6.95L12.292 5L8 3.05z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCoverageFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
