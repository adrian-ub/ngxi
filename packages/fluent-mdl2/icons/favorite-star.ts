import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FavoriteStarIcon],svg[fluent-mdl2-favorite-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1416 1254l248 794l-640-492l-640 492l248-794L0 768h784L1024 0l240 768h784zm5 446q-38-124-76-246t-78-247q103-77 203-155t202-156h-502l-146-467l-146 467H376q102 78 202 156t203 155q-40 124-78 246t-76 247l397-306z"></svg:path>`,
})
export class FluentMdl2FavoriteStarIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
