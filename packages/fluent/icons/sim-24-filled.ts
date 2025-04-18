import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSim24FilledIcon],svg[fluent-sim-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5.25A3.25 3.25 0 0 1 7.25 2h5.464a3.25 3.25 0 0 1 2.299.952l4.035 4.035c.61.61.952 1.437.952 2.299v9.464A3.25 3.25 0 0 1 16.75 22h-9.5A3.25 3.25 0 0 1 4 18.75zM7.75 14H12v-3.25H9.25a1.5 1.5 0 0 0-1.5 1.5zm0 1.5v1.25a1.5 1.5 0 0 0 1.5 1.5H12V15.5zm5.75 2.75h1.25a1.5 1.5 0 0 0 1.5-1.5v-4.5a1.5 1.5 0 0 0-1.5-1.5H13.5z"></svg:path>`,
})
export class FluentSim24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
