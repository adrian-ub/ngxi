import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeHaskellIcon],svg[material-icon-theme-haskell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-width="2.422"><svg:path fill="#ef5350" d="m23.928 240.5l59.94-89.852l-59.94-89.855h44.955l59.94 89.855l-59.94 89.852z"></svg:path><svg:path fill="#ffa726" d="m83.869 240.5l59.94-89.852l-59.94-89.855h44.955l119.88 179.71h-44.95l-37.46-56.156l-37.468 56.156z"></svg:path><svg:path fill="#ffee58" d="m228.72 188.08l-19.98-29.953h69.93v29.956h-49.95zm-29.97-44.924l-19.98-29.953h99.901v29.953z"></svg:path></svg:g>`,
})
export class MaterialIconThemeHaskellIcon {
  readonly viewBox = input("0 0 300 300")
  readonly width = input("1em")
  readonly height = input("1em")
}
