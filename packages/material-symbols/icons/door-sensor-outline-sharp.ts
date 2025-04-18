import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDoorSensorOutlineSharpIcon],svg[material-symbols-door-sensor-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 15V5v14zm-2 1h2v3h6V5H9v9H7V3h10v18H7zm5-6q.425 0 .713-.288T13 9t-.288-.712T12 8t-.712.288T11 9t.288.713T12 10m7-7h2v6h-2zm-6 13H4v-2h9z"></svg:path>`,
})
export class MaterialSymbolsDoorSensorOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
