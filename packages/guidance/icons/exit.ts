import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceExitIcon],svg[guidance-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M24 12H8m10.5-5c0 .577.665 1.562 1.228 2.294a7.5 7.5 0 0 0 1.745 1.662C22.2 11.445 23.2 12 23.99 12c-.79 0-1.79.556-2.517 1.044a7.5 7.5 0 0 0-1.745 1.662c-.563.732-1.228 1.717-1.228 2.294m-4-10V2.5h-.329A46 46 0 0 1 1.103.605L.75.5H.5v23h.25l.353-.105A46 46 0 0 1 14.171 21.5h.329V17"></svg:path>`,
})
export class GuidanceExitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
