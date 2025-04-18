import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNestEcoLeafRoundedIcon],svg[material-symbols-nest-eco-leaf-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.3 19.7q-.275-.275-.275-.7t.275-.7l1.375-1.375q-.8-1.025-1.237-2.275T4 12q0-3.35 2.325-5.675T12 4h6q.825 0 1.413.587T20 6v6q0 3.35-2.325 5.675T12 20q-1.4 0-2.637-.437T7.1 18.325L5.7 19.7q-.275.275-.7.275t-.7-.275m4.05-4.05q.275.325.7.312t.725-.312l3.925-3.925q.3-.3.3-.713t-.3-.712q-.275-.275-.7-.275t-.7.275l-3.95 3.95q-.275.275-.275.688t.275.712"></svg:path>`,
})
export class MaterialSymbolsNestEcoLeafRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
