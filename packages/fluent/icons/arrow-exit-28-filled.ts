import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowExit28FilledIcon],svg[fluent-arrow-exit-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h10a1 1 0 1 0 0-2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a1 1 0 1 0 0-2zm13.207 4.793a1 1 0 1 0-1.414 1.414L22.586 13H10a1 1 0 1 0 0 2h12.586l-3.793 3.793a1 1 0 0 0 1.414 1.414l5.5-5.5a1 1 0 0 0 0-1.414z"></svg:path>`,
})
export class FluentArrowExit28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
