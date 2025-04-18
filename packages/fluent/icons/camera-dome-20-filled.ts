import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCameraDome20FilledIcon],svg[fluent-camera-dome-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.5A1.5 1.5 0 0 1 3.5 3h13a1.5 1.5 0 0 1 0 3h-13A1.5 1.5 0 0 1 2 4.5M10 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-2 3a2 2 0 1 1 4 0a2 2 0 0 1-4 0M3 7h14v4a7 7 0 1 1-14 0zm7 1a4 4 0 1 0 0 8a4 4 0 0 0 0-8"></svg:path>`,
})
export class FluentCameraDome20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
