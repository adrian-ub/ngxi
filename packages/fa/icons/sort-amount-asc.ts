import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSortAmountAscIcon],svg[fa-sort-amount-asc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1440q0 12-10 24l-319 319q-10 9-23 9q-12 0-23-9L9 1463q-15-16-7-35q8-20 30-20h192V32q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23m1056 128v192q0 14-9 23t-23 9H896q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h832q14 0 23 9t9 23m-192-512v192q0 14-9 23t-23 9H896q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h640q14 0 23 9t9 23m-192-512v192q0 14-9 23t-23 9H896q-14 0-23-9t-9-23V544q0-14 9-23t23-9h448q14 0 23 9t9 23M1184 32v192q0 14-9 23t-23 9H896q-14 0-23-9t-9-23V32q0-14 9-23t23-9h256q14 0 23 9t9 23"></svg:path>`,
})
export class FaSortAmountAscIcon {
  readonly viewBox = input("0 0 1760 1792")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
