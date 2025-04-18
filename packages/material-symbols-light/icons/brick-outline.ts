import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBrickOutlineIcon],svg[material-symbols-light-brick-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V8.712h2.827V5h4.789v3.712h2.769V5h4.788v3.712H21V19zm1-1h16V9.712H4zm2.827-9.288h2.789V6H6.827zm7.558 0h2.788V6h-2.788zM4 18h16zm2.827-9.288h2.789zm7.558 0h2.788z"></svg:path>`,
})
export class MaterialSymbolsLightBrickOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
