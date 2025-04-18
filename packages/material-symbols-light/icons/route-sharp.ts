import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRouteSharpIcon],svg[material-symbols-light-route-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 20.5V8.475q-.875-.321-1.437-.987T3.5 6.006q0-1.044.729-1.775q.728-.731 1.769-.731t1.771.731t.731 1.776q0 .814-.562 1.48T6.5 8.48V19.5h5v-16h7v12.025q.875.321 1.438.987t.562 1.481q0 1.045-.728 1.776q-.729.731-1.77.731t-1.771-.731t-.731-1.775q0-.815.563-1.494t1.437-.979V4.5h-5v16z"></svg:path>`,
})
export class MaterialSymbolsLightRouteSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
