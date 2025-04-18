import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNavigationOutlineRoundedIcon],svg[material-symbols-navigation-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 18l-6.45 2.75q-.325.125-.612.063t-.488-.263t-.262-.5t.062-.625L11.075 4.05q.125-.3.388-.45T12 3.45t.537.15t.388.45l6.825 15.375q.125.325.062.625t-.262.5t-.488.263t-.612-.063zm-4.9-.1l4.9-2.1l4.9 2.1l-4.9-11zm4.9-2.1"></svg:path>`,
})
export class MaterialSymbolsNavigationOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
