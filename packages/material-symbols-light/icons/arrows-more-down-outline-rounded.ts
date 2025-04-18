import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowsMoreDownOutlineRoundedIcon],svg[material-symbols-light-arrows-more-down-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.808 20q-.343 0-.576-.232T6 19.192V10.5q0-.213.144-.356T6.501 10t.356.144T7 10.5V19h8.5q.213 0 .356.144t.144.357t-.144.356T15.5 20zm4-4q-.343 0-.576-.232T10 15.192V6.5q0-.213.144-.356T10.501 6t.356.144T11 6.5V15h8.5q.213 0 .356.144t.144.357t-.144.356T19.5 16z"></svg:path>`,
})
export class MaterialSymbolsLightArrowsMoreDownOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
