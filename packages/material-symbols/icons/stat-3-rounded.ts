import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStat3RoundedIcon],svg[material-symbols-stat-3-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 16.8l-3.9 3.875q-.275.275-.687.288t-.713-.288q-.275-.275-.275-.7t.275-.7l3.875-3.875q.575-.575 1.425-.575t1.425.575l3.875 3.875q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275zm0-6l-3.9 3.875q-.275.275-.687.288t-.713-.288q-.275-.275-.275-.7t.275-.7L10.575 9.4q.575-.575 1.425-.575t1.425.575l3.875 3.875q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275zm0-6L8.1 8.675q-.275.275-.687.288T6.7 8.675q-.275-.275-.275-.7t.275-.7L10.575 3.4q.575-.575 1.425-.575t1.425.575L17.3 7.275q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275z"></svg:path>`,
})
export class MaterialSymbolsStat3RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
