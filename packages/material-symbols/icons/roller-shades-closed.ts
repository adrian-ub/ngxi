import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRollerShadesClosedIcon],svg[material-symbols-roller-shades-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21v-2h2V3h16v16h2v2h-8.25q0 .725-.513 1.238T12 22.75t-1.237-.513T10.25 21zm4-2h5v-2H6zm7 0h5v-2h-5z"></svg:path>`,
})
export class MaterialSymbolsRollerShadesClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
