import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookmark32RegularIcon],svg[fluent-bookmark-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7.2A4.2 4.2 0 0 1 10.2 3h11.6A4.2 4.2 0 0 1 26 7.2V28a1 1 0 0 1-1.585.81L16 22.735L7.585 28.81A1 1 0 0 1 6 28zM10.2 5A2.2 2.2 0 0 0 8 7.2v18.844l7.415-5.355a1 1 0 0 1 1.17 0L24 26.044V7.2A2.2 2.2 0 0 0 21.8 5z"></svg:path>`,
})
export class FluentBookmark32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
