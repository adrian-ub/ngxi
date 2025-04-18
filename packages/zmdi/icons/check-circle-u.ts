import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCheckCircleUIcon],svg[zmdi-check-circle-u-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 3q88 0 151 62.5T427 216t-63 150.5T213 429T62.5 366.5T0 216T62.5 65.5T213 3m107 341v-43H107v43zm-143-85l143-143l-30-30l-113 113l-40-41l-30 30z"></svg:path>`,
})
export class ZmdiCheckCircleUIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
