import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDatabase16Icon],svg[fluent-color-database-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDatabase160)" d="M3 12.5v-9c1.057.926 2.864 1.513 5 1.513s3.943-.587 5-1.513v9c0 1.425-2.149 2.5-5 2.5s-5-1.075-5-2.5"></svg:path><svg:path fill="url(#fluentColorDatabase161)" fill-opacity=".7" d="M3 12.5v-9c1.057.926 2.864 1.513 5 1.513s3.943-.587 5-1.513v9c0 1.425-2.149 2.5-5 2.5s-5-1.075-5-2.5"></svg:path><svg:path fill="url(#fluentColorDatabase162)" d="M13 3.5C13 4.88 10.761 6 8 6S3 4.88 3 3.5S5.239 1 8 1s5 1.12 5 2.5"></svg:path><svg:defs><svg:lineargradient id="fluentColorDatabase160" x1="5.361" x2="12.114" y1=".909" y2="13.242" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#29C3FF"></svg:stop><svg:stop offset="1" stop-color="#367AF2"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDatabase161" x1="9.548" x2="12.136" y1="4.912" y2="16.096" gradientUnits="userSpaceOnUse"><svg:stop offset=".533" stop-color="#FF6CE8" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#FF6CE8"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDatabase162" x1="16.75" x2="10.972" y1="8.5" y2="-2.018" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#58AAFE"></svg:stop><svg:stop offset="1" stop-color="#6CE0FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDatabase16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
