import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAnticlockwise90OutlineIcon],svg[lsicon-anticlockwise-90-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5.5 10.5h-3V8h3zm0 0v3H2M13.5 10V7.5a4 4 0 0 0-4-4H4m0 0l2 2m-2-2l2-2m1.5 12h3V8h-3z"></svg:path>`,
})
export class LsiconAnticlockwise90OutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
