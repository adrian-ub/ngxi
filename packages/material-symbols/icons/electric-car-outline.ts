import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsElectricCarOutlineIcon],svg[material-symbols-electric-car-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15v1q0 .425-.288.713T5 17H4q-.425 0-.712-.288T3 16V8l2.1-6q.15-.45.538-.725T6.5 1h11q.475 0 .863.275T18.9 2L21 8v8q0 .425-.287.713T20 17h-1q-.425 0-.712-.288T18 16v-1zm-.2-9h12.4l-1.05-3H6.85zM5 8v5zm2.5 4q.625 0 1.063-.437T9 10.5t-.437-1.062T7.5 9t-1.062.438T6 10.5t.438 1.063T7.5 12m9 0q.625 0 1.063-.437T18 10.5t-.437-1.062T16.5 9t-1.062.438T15 10.5t.438 1.063T16.5 12M13 23l-6-3h4v-2l6 3h-4zM5 13h14V8H5z"></svg:path>`,
})
export class MaterialSymbolsElectricCarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
