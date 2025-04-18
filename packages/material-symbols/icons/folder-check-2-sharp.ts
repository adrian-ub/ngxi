import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderCheck2SharpIcon],svg[material-symbols-folder-check-2-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13q2.075 0 3.538 1.463T23 18t-1.463 3.538T18 23t-3.537-1.463T13 18t1.463-3.537T18 13m-7 5q0 .525.075 1.025T11.3 20H2V4h8l2 2h10v6.275q-.875-.625-1.9-.95T18 11q-2.9 0-4.95 2.05T11 18m6.275 2.25l3.475-3.45l-1.05-1.05l-2.425 2.375l-.975-.975l-1.05 1.075z"></svg:path>`,
})
export class MaterialSymbolsFolderCheck2SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
