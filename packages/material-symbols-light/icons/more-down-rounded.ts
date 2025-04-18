import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMoreDownRoundedIcon],svg[material-symbols-light-more-down-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 17.5h8q.213 0 .356.144t.144.357t-.144.356t-.356.143H6.308q-.343 0-.576-.232t-.232-.576V9.5q0-.213.144-.356T6.001 9t.356.144t.143.356zm5-5h8q.213 0 .356.144t.144.357t-.144.356t-.356.143h-8.192q-.343 0-.576-.232t-.232-.576V4.5q0-.213.144-.356T11.001 4t.356.144t.143.356z"></svg:path>`,
})
export class MaterialSymbolsLightMoreDownRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
