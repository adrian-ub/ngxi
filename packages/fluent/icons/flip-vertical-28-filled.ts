import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlipVertical28FilledIcon],svg[fluent-flip-vertical-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.543 2.16A1 1 0 0 1 24 3v9a1 1 0 0 1-1 1H3a1 1 0 0 1-.41-1.912l20-9a1 1 0 0 1 .953.072M7.66 11H22V4.547zM24 25.25a.75.75 0 0 1-1.065.68l-20.5-9.5A.75.75 0 0 1 2.75 15h20.5a.75.75 0 0 1 .75.75z"></svg:path>`,
})
export class FluentFlipVertical28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
