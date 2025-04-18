import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconClockwise90OutlineIcon],svg[lsicon-clockwise-90-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8.5 10.5h-3V8h3zm0 0v3H5M2.5 10V7.5a4 4 0 0 1 4-4H11m0 0l-2-2m2 2l-2 2m1.5 8h3V8h-3z"></svg:path>`,
})
export class LsiconClockwise90OutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
