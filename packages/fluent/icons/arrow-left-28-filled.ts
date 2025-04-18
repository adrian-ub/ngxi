import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowLeft28FilledIcon],svg[fluent-arrow-left-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.298 4.289a1 1 0 0 1 1.406 1.422L6.328 13h17.675a1 1 0 1 1 0 2H6.33l7.374 7.286a1 1 0 0 1-1.406 1.423l-8.927-8.821a1.25 1.25 0 0 1 0-1.778z"></svg:path>`,
})
export class FluentArrowLeft28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
