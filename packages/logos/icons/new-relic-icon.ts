import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosNewRelicIconIcon],svg[logos-new-relic-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00AC69" d="M206.745 102.322v90.942L128 238.745v56.841l128-73.892V73.892z"></svg:path><svg:path fill="#1CE783" d="m128 56.86l78.745 45.462L256 73.892L128 0L0 73.892l49.236 28.43z"></svg:path><svg:path fill="#1D252C" d="M78.764 176.232v90.943L128 295.586V147.802L0 73.892v56.86z"></svg:path>`,
})
export class LogosNewRelicIconIcon {
  readonly viewBox = input("0 0 256 296")
  readonly width = input("0.87em")
  readonly height = input("1em")
}
