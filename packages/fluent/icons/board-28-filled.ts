import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBoard28FilledIcon],svg[fluent-board-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 3v6.5H3V6.75A3.75 3.75 0 0 1 6.75 3zM15 3v13.5h10V6.75A3.75 3.75 0 0 0 21.25 3zm10 15H15v7h6.25A3.75 3.75 0 0 0 25 21.25zm-11.5 7V11H3v10.25A3.75 3.75 0 0 0 6.75 25z"></svg:path>`,
})
export class FluentBoard28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
