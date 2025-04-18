import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBlindsClosedIcon],svg[material-symbols-blinds-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 22.75q-.725 0-1.237-.513T13.25 21H2v-2h2V3h16v16h2v2h-5.25q0 .725-.513 1.238T15 22.75M6 7h8V5H6zm10 0h2V5h-2zM6 11h8V9H6zm10 0h2V9h-2zM6 15h8v-2H6zm10 0h2v-2h-2zM6 19h8v-2H6zm10 0h2v-2h-2z"></svg:path>`,
})
export class MaterialSymbolsBlindsClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
