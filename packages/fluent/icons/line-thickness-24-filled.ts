import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineThickness24FilledIcon],svg[fluent-line-thickness-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2zm-1 7.5A1.5 1.5 0 0 1 3.5 9h17a1.5 1.5 0 0 1 0 3h-17A1.5 1.5 0 0 1 2 10.5M2 18a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2"></svg:path>`,
})
export class FluentLineThickness24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
