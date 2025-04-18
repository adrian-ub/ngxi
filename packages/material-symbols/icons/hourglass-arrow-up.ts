import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHourglassArrowUpIcon],svg[material-symbols-hourglass-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 20v-2H4v-2.5q0-1.05.45-1.95T5.7 12q-.8-.65-1.25-1.55T4 8.5V6H2.5V4h12v2H13v2.5q0 1.05-.45 1.95T11.3 12q.8.65 1.25 1.55T13 15.5V18h1.5v2zm16 0V7.8l-1.1 1.1L16 7.5L19.5 4L23 7.5l-1.425 1.4L20.5 7.825V20z"></svg:path>`,
})
export class MaterialSymbolsHourglassArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
