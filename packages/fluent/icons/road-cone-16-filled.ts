import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRoadCone16FilledIcon],svg[fluent-road-cone-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.462 1a1 1 0 0 0-.97.757L5.056 7.5H8.5a.5.5 0 0 1 0 1H4.806l-.5 2H9.25a.5.5 0 0 1 0 1H4.056L3.43 14H1.5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-1.931L9.509 1.757A1 1 0 0 0 8.537 1z"></svg:path>`,
})
export class FluentRoadCone16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
