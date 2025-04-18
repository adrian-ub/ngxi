import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBarChartOffRoundedIcon],svg[material-symbols-bar-chart-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20q-.425 0-.712-.288T4 19v-9q0-.425.288-.712T5 9h2q.425 0 .713.288T8 10v9q0 .425-.288.713T7 20zm6 0q-.425 0-.712-.288T10 19v-9l4 4v5q0 .425-.288.713T13 20zm3-8.85l-4-4V5q0-.425.288-.712T11 4h2q.425 0 .713.288T14 5zm6 6l-4-4V13h3q.425 0 .713.288T20 14zm-.925 4.75l-17-16.975q-.3-.3-.288-.712T2.1 3.5t.713-.3t.712.3l16.975 17q.3.3.3.7t-.3.7t-.712.3t-.713-.3"></svg:path>`,
})
export class MaterialSymbolsBarChartOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
