import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightIronIcon],svg[material-symbols-light-iron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17v-2.077q0-1.362.992-2.334t2.412-.974h8.962V10.5q0-.617-.451-1.059T13.808 9h-2.962q-.655 0-1.116.441q-.46.442-.46 1.059h-1q0-1.038.75-1.77T10.845 8h2.962q1.077 0 1.817.73t.74 1.77v3.962h.058q.656 0 1.117-.442q.46-.441.46-1.058V9.5q0-1.038.74-1.77q.74-.73 1.818-.73H21v1h-.442q-.656 0-1.107.441Q19 8.883 19 9.5v3.462q0 1.038-.75 1.769t-1.827.73h-.057V17z"></svg:path>`,
})
export class MaterialSymbolsLightIronIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
