import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKitchenIcon],svg[material-symbols-light-kitchen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.192 8h1V5.385h-1zm0 8.116h1v-4.347h-1zM6.616 21q-.667 0-1.141-.475T5 19.386v-9h14v9q0 .67-.475 1.143q-.474.472-1.14.472zM5 9.385v-4.77q0-.666.475-1.14T6.615 3h10.77q.666 0 1.14.475T19 4.615v4.77z"></svg:path>`,
})
export class MaterialSymbolsLightKitchenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
