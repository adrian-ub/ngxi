import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStairs2RoundedIcon],svg[material-symbols-light-stairs-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 18q-.213 0-.356-.144T3 17.499t.144-.356T3.5 17h5.173v-4.692q0-.343.232-.576t.576-.232h4.846V6.808q0-.343.232-.576T15.134 6H20.5q.213 0 .356.144t.144.357t-.144.356T20.5 7h-5.173v4.692q0 .344-.232.576t-.576.232H9.673v4.692q0 .344-.232.576T8.866 18z"></svg:path>`,
})
export class MaterialSymbolsLightStairs2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
