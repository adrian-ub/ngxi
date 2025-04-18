import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNoBackpackSharpIcon],svg[material-symbols-no-backpack-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.5 13.675l3.5 3.5V8q0-1.4-.85-2.45T17 4.15V2h-3v2h-4V2H7v2.15L14.825 12H16.5zm3.275 8.925l-3.2-3.2h2.8L20 20v2H4V8q0-.825.313-1.55t.862-1.275l.975.975v2.825L1.4 4.225L2.8 2.8l18.375 18.4zM7.5 14h3.675l-2-2H7.5z"></svg:path>`,
})
export class MaterialSymbolsNoBackpackSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
