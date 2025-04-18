import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBench24FilledIcon],svg[fluent-bench-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 4A2.75 2.75 0 0 0 3 6.75V12h18V6.75A2.75 2.75 0 0 0 18.25 4zM3 13a2 2 0 1 0 0 4v2.25a.75.75 0 0 0 1.5 0V17h15v2.25a.75.75 0 0 0 1.5 0V17a2 2 0 1 0 0-4z"></svg:path>`,
})
export class FluentBench24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
