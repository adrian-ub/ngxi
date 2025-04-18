import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightClearAllRoundedIcon],svg[material-symbols-light-clear-all-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 15.885q-.213 0-.356-.144Q4 15.597 4 15.384t.144-.356t.356-.144h11.25q.213 0 .356.145t.144.356t-.144.356t-.356.144zM6.366 12.5q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143h11.25q.212 0 .356.144t.143.357t-.143.356t-.357.143zM8.25 9.116q-.213 0-.356-.144t-.144-.357t.144-.356t.356-.144H19.5q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.144z"></svg:path>`,
})
export class MaterialSymbolsLightClearAllRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
