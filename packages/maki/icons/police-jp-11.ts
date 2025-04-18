import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiPoliceJp11Icon],svg[maki-police-jp-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5.5.5a5 5 0 1 0 5 5a5 5 0 0 0-5-5zm2.057 2.182L5.5 4.739L3.443 2.682a3.442 3.442 0 0 1 4.114 0zm-4.875.761L4.739 5.5L2.682 7.557a3.442 3.442 0 0 1 0-4.114zm.761 4.875L5.5 6.261l2.057 2.057a3.442 3.442 0 0 1-4.114 0zm4.875-.761L6.261 5.5l2.057-2.057a3.442 3.442 0 0 1 0 4.114z" fill="currentColor"></svg:path>`,
})
export class MakiPoliceJp11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
