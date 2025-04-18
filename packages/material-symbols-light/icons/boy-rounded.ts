import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBoyRoundedIcon],svg[material-symbols-light-boy-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.996 7.5q-.567 0-.964-.401t-.397-.968t.4-.965t.969-.397t.964.401q.398.401.398.968t-.401.965t-.969.397m-1.342 10.654v-3.808h-.192q-.344 0-.576-.232t-.232-.575V9.923q0-.555.395-.95q.396-.396.951-.396h2q.555 0 .95.395q.396.396.396.951v3.616q0 .343-.232.575t-.576.232h-.192v3.808q0 .343-.232.575t-.576.233h-1.077q-.343 0-.575-.233t-.232-.575"></svg:path>`,
})
export class MaterialSymbolsLightBoyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
