import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTheatersRoundedIcon],svg[material-symbols-light-theaters-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 18.5V20q0 .213-.144.356t-.357.144t-.356-.144T4.5 20V4q0-.213.144-.356t.357-.144t.356.144T5.5 4v1.5h3V4.308q0-.343.232-.576t.576-.232h5.384q.344 0 .576.232t.232.576V5.5h3V4q0-.213.144-.356t.357-.144t.356.144T19.5 4v16q0 .213-.144.356t-.357.144t-.356-.144T18.5 20v-1.5h-3v1.192q0 .344-.232.576t-.576.232H9.308q-.343 0-.576-.232t-.232-.576V18.5zm0-1h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm10 8h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3z"></svg:path>`,
})
export class MaterialSymbolsLightTheatersRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
