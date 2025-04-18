import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVerticalShadesOutlineIcon],svg[material-symbols-light-vertical-shades-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20v-1h2V4h14v15h2v1zm3-1h2.75V5H6zm3.75 0h4.5V5h-4.5zm5.5 0H18V5h-2.75zM6 19V5zm12 0V5z"></svg:path>`,
})
export class MaterialSymbolsLightVerticalShadesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
