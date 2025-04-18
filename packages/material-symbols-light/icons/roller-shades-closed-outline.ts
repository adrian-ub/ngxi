import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRollerShadesClosedOutlineIcon],svg[material-symbols-light-roller-shades-closed-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20v-1h2V4h14v15h2v1h-7.865q0 .47-.334.802q-.333.333-.804.333t-.802-.333t-.33-.802zm3-4.404h12V5H6zM6 19h5.5v-2.404H6zm6.5 0H18v-2.404h-5.5zM6 5h12z"></svg:path>`,
})
export class MaterialSymbolsLightRollerShadesClosedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
