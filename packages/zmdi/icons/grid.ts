import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiGridIcon],svg[zmdi-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 3q18 0 30.5 12.5T427 45v342q0 17-12.5 29.5T384 429H43q-18 0-30.5-12.5T0 387V45q0-17 12.5-29.5T43 3zM128 387v-86H43v86zm0-128v-86H43v86zm0-128V45H43v86zm128 256v-86h-85v86zm0-128v-86h-85v86zm0-128V45h-85v86zm128 256v-86h-85v86zm0-128v-86h-85v86zm0-128V45h-85v86z"></svg:path>`,
})
export class ZmdiGridIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
