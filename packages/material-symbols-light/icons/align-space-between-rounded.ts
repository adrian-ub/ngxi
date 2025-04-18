import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignSpaceBetweenRoundedIcon],svg[material-symbols-light-align-space-between-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 21q-.213 0-.356-.144T3 20.499t.144-.356T3.5 20h4v-1.192q0-.344.232-.576T8.308 18h7.384q.344 0 .576.232t.232.576V20h4q.213 0 .356.144t.144.357t-.144.356T20.5 21zM8.308 6q-.343 0-.576-.232T7.5 5.192V4h-4q-.213 0-.356-.144T3 3.499t.144-.356T3.5 3h17q.213 0 .356.144t.144.357t-.144.356T20.5 4h-4v1.192q0 .343-.232.576T15.692 6z"></svg:path>`,
})
export class MaterialSymbolsLightAlignSpaceBetweenRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
