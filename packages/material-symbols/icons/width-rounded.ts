import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidthRoundedIcon],svg[material-symbols-width-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.825 13l.875.925q.275.275.275.688T7.7 15.3q-.3.3-.712.3t-.688-.3l-2.6-2.575q-.15-.15-.225-.337T3.4 12t.075-.375t.225-.325l2.6-2.6q.275-.275.688-.275T7.7 8.7q.3.3.3.713t-.3.712L6.825 11h10.35l-.9-.9Q16 9.825 16 9.413t.3-.713q.275-.275.688-.275t.712.275l2.575 2.6q.15.15.225.325t.075.375t-.075.387t-.225.338l-2.6 2.6q-.275.275-.687.275t-.713-.3Q16 15.025 16 14.613t.275-.688l.9-.925z"></svg:path>`,
})
export class MaterialSymbolsWidthRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
