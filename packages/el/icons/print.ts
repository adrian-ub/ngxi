import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elPrintIcon],svg[el-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M367.456 73.572v181.2h-47.388L40.21 373.865h1119.58L879.932 254.772h-47.388v-181.2zM0 443.444v364.381h185.742l-65.259 318.603h959.033l-65.259-318.604H1200V443.443zm291.431 137.329h617.065l93.75 457.765H197.681z"></svg:path>`,
})
export class ElPrintIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
