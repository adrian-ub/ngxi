import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowRight28FilledIcon],svg[fluent-arrow-right-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.705 4.289a1 1 0 1 0-1.406 1.422L21.675 13H4a1 1 0 1 0 0 2h17.673l-7.374 7.286a1 1 0 0 0 1.406 1.423l8.927-8.821a1.25 1.25 0 0 0 0-1.778z"></svg:path>`,
})
export class FluentArrowRight28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
