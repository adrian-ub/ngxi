import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowsMoreDownRoundedIcon],svg[material-symbols-light-arrows-more-down-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.808 20q-.343 0-.576-.232T6 19.192V10.5q0-.213.144-.356T6.501 10t.356.144T7 10.5V19h8.5q.213 0 .356.144t.144.357t-.144.356T15.5 20zm4-3.98q-.343 0-.576-.233T10 15.212V6.519q0-.212.144-.356t.357-.144t.356.144t.143.356v8.5h8.5q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143z"></svg:path>`,
})
export class MaterialSymbolsLightArrowsMoreDownRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
