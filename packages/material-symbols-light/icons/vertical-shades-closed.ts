import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVerticalShadesClosedIcon],svg[material-symbols-light-vertical-shades-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20v-1h2V4h14v15h2v1zm3-1h2.25V5H6zm3.25 0h2.25V5H9.25zm3.25 0h2.25V5H12.5zm3.25 0H18V5h-2.25z"></svg:path>`,
})
export class MaterialSymbolsLightVerticalShadesClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
