import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSim16FilledIcon],svg[fluent-sim-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 1A2.5 2.5 0 0 0 3 3.5v9A2.5 2.5 0 0 0 5.5 15h5a2.5 2.5 0 0 0 2.5-2.5V5.328a2.5 2.5 0 0 0-.732-1.767l-1.829-1.829A2.5 2.5 0 0 0 8.672 1zm1 7H8v5H6.5A1.5 1.5 0 0 1 5 11.5v-2A1.5 1.5 0 0 1 6.5 8M9 8h.5A1.5 1.5 0 0 1 11 9.5v2A1.5 1.5 0 0 1 9.5 13H9z"></svg:path>`,
})
export class FluentSim16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
