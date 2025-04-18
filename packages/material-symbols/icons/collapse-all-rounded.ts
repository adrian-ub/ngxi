import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCollapseAllRoundedIcon],svg[material-symbols-collapse-all-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 17.4l-3.9 3.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l3.875-3.875q.575-.575 1.425-.575t1.425.575L17.3 19.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275zm0-10.8l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-3.875 3.875Q12.85 8.55 12 8.55t-1.425-.575L6.7 4.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275z"></svg:path>`,
})
export class MaterialSymbolsCollapseAllRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
