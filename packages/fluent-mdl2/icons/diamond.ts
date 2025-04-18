import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DiamondIcon],svg[fluent-mdl2-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1928 829l-904 1113L120 829l537-573h734zm-666-61l-144-384H930L786 768zM779 896l245 858l245-858zm-93-512L327 768h343l144-384zM314 896l542 667l-191-667zm878 667l542-667h-351zm529-795l-359-384h-128l144 384z"></svg:path>`,
})
export class FluentMdl2DiamondIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
