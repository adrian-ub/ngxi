import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilChevronLeftIcon],svg[cil-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m327.086 496.89l-142.6-142.6l-11.258-11.15l-85.6-85.6l.054-.054l11.259-11.367l85.5-85.5l.054.054l142.6-142.595L424 114.989L281.506 257.483L424 399.978ZM184.64 309.3l11.266 11.159l131.18 131.181l51.658-51.658l-142.493-142.499l142.493-142.494l-51.658-51.658l-142.392 142.394l-.054-.054l-51.813 51.812Z"></svg:path>`,
})
export class CilChevronLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
