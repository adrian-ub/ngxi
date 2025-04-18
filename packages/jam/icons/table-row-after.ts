import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamTableRowAfterIcon],svg[jam-table-row-after-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v6h1a1 1 0 0 1 0 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1a1 1 0 0 1 0-2h1V6zm0-2h2V2H2zm4-2v2h2V2zm4 0v2h2V2zm-2 9v1a1 1 0 0 1-2 0v-1H5a1 1 0 0 1 0-2h1V8a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2z"></svg:path>`,
})
export class JamTableRowAfterIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
