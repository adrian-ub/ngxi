import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWaterBottleLargeIcon],svg[material-symbols-light-water-bottle-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 21.116q-.666 0-1.14-.475q-.476-.475-.476-1.141v-1.77q0-.665.475-1.14t1.141-.475h.385v-5.23H7.5q-.666 0-1.14-.475q-.476-.475-.476-1.14V7.5q0-.666.475-1.14q.475-.476 1.141-.476h3.192V4.5h-1v-1h4.616v1h-1v1.385H16.5q.666 0 1.14.474q.476.475.476 1.141v1.77q0 .666-.475 1.14q-.475.475-1.141.475h-.385v5.23h.385q.666 0 1.14.475q.476.475.476 1.14v1.77q0 .666-.475 1.14q-.475.476-1.141.476z"></svg:path>`,
})
export class MaterialSymbolsLightWaterBottleLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
