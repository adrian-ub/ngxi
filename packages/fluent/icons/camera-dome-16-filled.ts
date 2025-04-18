import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCameraDome16FilledIcon],svg[fluent-camera-dome-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3.5A1.5 1.5 0 0 1 2.5 2h11a1.5 1.5 0 0 1 0 3h-11A1.5 1.5 0 0 1 1 3.5M8 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-1 2a1 1 0 1 1 2 0a1 1 0 0 1-2 0m7-4H2v3a6 6 0 0 0 12 0zm-9 4a3 3 0 1 1 6 0a3 3 0 0 1-6 0"></svg:path>`,
})
export class FluentCameraDome16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
