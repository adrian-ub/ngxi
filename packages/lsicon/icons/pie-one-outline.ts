import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPieOneOutlineIcon],svg[lsicon-pie-one-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M14.279 9.682a6.5 6.5 0 1 1-7.961-7.96M14.5 8A6.5 6.5 0 0 0 8 1.5v6a.5.5 0 0 0 .5.5z"></svg:path>`,
})
export class LsiconPieOneOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
