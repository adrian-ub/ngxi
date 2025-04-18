import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFrontHandSharpIcon],svg[material-symbols-front-hand-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 23q-3.55 0-6.025-2.475T4 14.5V4h2v7h2V2h2v9h2V1h2v10h2V3h2v6.75q-.725.525-1.112 1.325T16.5 12.75V14h-1.25q-1.575 0-2.662 1.088T11.5 17.75V19H13v-1.25q0-.95.65-1.6t1.6-.65H18v-2.75q0-.95.65-1.6t1.6-.65H21v4q0 3.55-2.475 6.025T12.5 23"></svg:path>`,
})
export class MaterialSymbolsFrontHandSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
