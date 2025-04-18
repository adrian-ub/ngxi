import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowPrevious20RegularIcon],svg[fluent-arrow-previous-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5a.5.5 0 0 0-.492.41L5.5 5.5v9a.5.5 0 0 0 .992.09l.008-.09v-9A.5.5 0 0 0 6 5m7.854.146a.5.5 0 0 0-.638-.057l-.07.057l-4.5 4.5a.5.5 0 0 0-.057.638l.057.07l4.5 4.5a.5.5 0 0 0 .765-.638l-.057-.07L9.707 10l4.147-4.146a.5.5 0 0 0 0-.708"></svg:path>`,
})
export class FluentArrowPrevious20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
