import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFloorRoundedIcon],svg[material-symbols-light-floor-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20.5v-3.692q0-.344.232-.576T7.808 16H11.5v-3.692q0-.343.232-.576t.576-.232H16V7.808q0-.343.232-.576T16.808 7H20.5V4q0-.213.144-.356t.357-.144t.356.144T21.5 4v3.192q0 .343-.232.576T20.692 8H17v3.692q0 .343-.232.576t-.576.232H12.5v3.692q0 .344-.232.576t-.576.232H8v3.692q0 .344-.232.576t-.576.232H4q-.213 0-.356-.144t-.144-.357t.144-.356T4 20.5z"></svg:path>`,
})
export class MaterialSymbolsLightFloorRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
