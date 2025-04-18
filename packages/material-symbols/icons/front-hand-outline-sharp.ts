import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFrontHandOutlineSharpIcon],svg[material-symbols-front-hand-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12V1h2v11zm-4 0V2h2v10zm4.5 11q-3.55 0-6.025-2.475T4 14.5V4h2v10.5q0 2.725 1.888 4.613T12.5 21t4.613-1.888T19 14.5V11q-.425 0-.712.288T18 12v4h-3q-.825 0-1.412.588T13 18v1h-2v-1q0-1.65 1.175-2.825T15 14h1V3h2v6.175q.25-.075.488-.125T19 9h2v5.5q0 3.55-2.475 6.025T12.5 23m1-8"></svg:path>`,
})
export class MaterialSymbolsFrontHandOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
