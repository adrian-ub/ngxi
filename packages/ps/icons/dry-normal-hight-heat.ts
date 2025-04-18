import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psDryNormalHightHeatIcon],svg[ps-dry-normal-hight-heat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469 0H43Q25 0 12.5 12.5T0 43v426q0 18 12.5 30.5T43 512h426q18 0 30.5-12.5T512 469V43q0-18-12.5-30.5T469 0m0 469H43V43h426zm-213-23q79 0 135.5-56T448 254t-56-136t-136-56t-136 56t-56 136t56 136t136 56m0-339q61 0 105 43.5T405 256t-43.5 105.5T256 405t-105.5-43.5T107 256t43.5-105.5T256 107m-43 149q0 9-6 15t-15 6t-15-6t-6-15t6-15t15-6t15 6t6 15m64 0q0 9-6 15t-15 6t-15-6t-6-15t6-15t15-6t15 6t6 15m64 0q0 9-6 15t-15 6t-15-6t-6-15t6-15t15-6t15 6t6 15"></svg:path>`,
})
export class PsDryNormalHightHeatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
