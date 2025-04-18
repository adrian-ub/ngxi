import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentComment12FilledIcon],svg[fluent-comment-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v1.5a.5.5 0 0 0 .777.416L6.651 9H9a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2z"></svg:path>`,
})
export class FluentComment12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
