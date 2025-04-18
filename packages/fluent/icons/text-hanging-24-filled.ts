import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextHanging24FilledIcon],svg[fluent-text-hanging-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2zm-7 12a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm1-5a1 1 0 0 0-1-1H3a1 1 0 1 0 0 2h11a1 1 0 0 0 1-1m4.293 1.293a1 1 0 0 1 1.414 1.414L19.414 16l1.293 1.293a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414z"></svg:path>`,
})
export class FluentTextHanging24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
