import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsThumbDownOutlineIcon],svg[material-symbols-thumb-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h11v13l-7 7l-1.25-1.25q-.175-.175-.288-.475T8.35 20.7v-.35L9.45 16H3q-.8 0-1.4-.6T1 14v-2q0-.175.05-.375t.1-.375l3-7.05q.225-.5.75-.85T6 3m9 2H6l-3 7v2h9l-1.35 5.5L15 15.15zm0 10.15V5zm2 .85v-2h3V5h-3V3h5v13z"></svg:path>`,
})
export class MaterialSymbolsThumbDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
