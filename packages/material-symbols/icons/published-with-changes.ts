import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPublishedWithChangesIcon],svg[material-symbols-published-with-changes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21.95q-1.9-.2-3.537-1.037t-2.85-2.175T2.7 15.675T2 12q0-2.275.913-4.2T5.4 4.5H3v-2h6v6H7V5.775q-1.375 1.1-2.187 2.713T4 12q0 3.075 2.013 5.313T11 19.925zm-.425-5.35L6.35 12.35l1.4-1.4l2.825 2.825L16.25 8.1l1.4 1.425zM15 21.5v-6h2v2.725q1.375-1.125 2.188-2.725T20 12q0-3.075-2.013-5.312T13 4.075V2.05q3.8.375 6.4 3.2T22 12q0 2.275-.913 4.2T18.6 19.5H21v2z"></svg:path>`,
})
export class MaterialSymbolsPublishedWithChangesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
