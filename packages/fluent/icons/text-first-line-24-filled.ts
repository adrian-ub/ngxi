import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextFirstLine24FilledIcon],svg[fluent-text-first-line-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.293 3.293a1 1 0 1 1 1.414 1.414L20.414 6l1.293 1.293a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414zM14 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2zM3 17h18a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2m19-5a1 1 0 0 0-1-1H3a1 1 0 1 0 0 2h18a1 1 0 0 0 1-1"></svg:path>`,
})
export class FluentTextFirstLine24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
