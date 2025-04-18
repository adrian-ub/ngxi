import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCallMergeRoundedIcon],svg[material-symbols-call-merge-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.7 19.3q-.275-.275-.275-.7t.275-.7l4.3-4.3V6.875L9.125 8.75q-.3.3-.7.3t-.7-.3t-.3-.712t.3-.713l3.575-3.6q.15-.15.325-.213T12 3.45t.375.062t.325.213l3.625 3.625q.3.3.3.7t-.3.7t-.712.3t-.713-.3L13 6.875v6.7q0 .4-.15.763t-.425.637L8.1 19.3q-.275.275-.7.275t-.7-.275m10.6.025q-.275.275-.7.275t-.7-.275l-1.8-1.775q-.3-.3-.3-.7t.3-.7t.713-.3t.712.3l1.775 1.775q.275.275.288.688t-.288.712"></svg:path>`,
})
export class MaterialSymbolsCallMergeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
