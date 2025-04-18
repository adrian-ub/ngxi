import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FavoriteListIcon],svg[fluent-mdl2-favorite-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 768v128h-878q-36-118-72-233t-74-234q-37 118-73 233t-73 234H376q102 78 202 156t203 155q-40 124-78 246t-76 247l397-306v162l-640 492l248-794L0 768h784L1024 0l240 768zm-896 384h896v128h-896zm0 384h896v128h-896z"></svg:path>`,
})
export class FluentMdl2FavoriteListIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
