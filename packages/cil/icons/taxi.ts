import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilTaxiIcon],svg[cil-taxi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 304v-96h40v-32H40v32h40v96zm221.483 0L356 269.358L378.517 304h38.166l-41.6-64l41.6-64h-38.166L356 210.642L333.483 176h-38.166l41.6 64l-41.6 64zM440 176h32v128h-32zM40 104h432v32H40zm0 240h432v32H40zm201.337-64l8 24h33.731L240.4 176h-45.952l-39.439 128h33.484l7.4-24Zm-23.617-70.854L230.671 248h-24.923Z"></svg:path>`,
})
export class CilTaxiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
