import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1ProhibitedIcon],svg[noto-v1-prohibited-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="64.25" cy="64.28" r="54.44" fill="#fff"></svg:circle><svg:path fill="#db4437" d="M63.99 128.01c-35.29 0-64-28.71-64-64s28.71-64 64-64s64 28.71 64 64s-28.71 64-64 64m0-117.11c-29.29 0-53.11 23.83-53.11 53.11c0 29.29 23.83 53.11 53.11 53.11S117.1 93.3 117.1 64.01c0-29.28-23.83-53.11-53.11-53.11"></svg:path><svg:path fill="#db4437" d="m111.37 103.73l-8.43 8.41l-86.31-85.73L25.06 18z"></svg:path>`,
})
export class NotoV1ProhibitedIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
