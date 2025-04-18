import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSquareHintHexagon32RegularIcon],svg[fluent-square-hint-hexagon-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m0 24a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M3 18a1 1 0 1 0 2 0v-4a1 1 0 1 0-2 0zm25 1a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1M8 3a1 1 0 0 1 0 2h-.25A2.75 2.75 0 0 0 5 7.75V8a1 1 0 0 1-2 0v-.25A4.75 4.75 0 0 1 7.75 3zm1 25a1 1 0 0 1-1 1h-.25A4.75 4.75 0 0 1 3 24.25V24a1 1 0 1 1 2 0v.25A2.75 2.75 0 0 0 7.75 27H8a1 1 0 0 1 1 1M24 3a1 1 0 1 0 0 2h.25A2.75 2.75 0 0 1 27 7.75V8a1 1 0 1 0 2 0v-.25A4.75 4.75 0 0 0 24.25 3zm-1 25a1 1 0 0 0 1 1h.25A4.75 4.75 0 0 0 29 24.25V24a1 1 0 1 0-2 0v.25A2.75 2.75 0 0 1 24.25 27H24a1 1 0 0 0-1 1M11.38 10a2 2 0 0 1 1.732-1h5.771a2 2 0 0 1 1.732 1l2.886 5a2 2 0 0 1 0 2l-2.886 5a2 2 0 0 1-1.732 1h-5.77a2 2 0 0 1-1.733-1l-2.886-5a2 2 0 0 1 0-2zm7.503 1h-5.77l-2.886 5l2.885 5h5.771l2.886-5z"></svg:path>`,
})
export class FluentSquareHintHexagon32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
