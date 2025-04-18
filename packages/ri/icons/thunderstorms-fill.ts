import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riThunderstormsFillIcon],svg[ri-thunderstorms-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.989 18l1.215-1.58a1.5 1.5 0 0 0-1.189-2.415H15v-3.976a1.5 1.5 0 0 0-2.69-.914l-6.365 8.281A8.002 8.002 0 0 1 9 2a8 8 0 0 1 7.458 5.099A5.5 5.5 0 1 1 17.5 18zM13 16.005h3l-5 6.5v-4.5H8l5-6.505z"></svg:path>`,
})
export class RiThunderstormsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
