import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCameraDome16RegularIcon],svg[fluent-camera-dome-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 9a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4M1 3.5A1.5 1.5 0 0 1 2.5 2h11A1.5 1.5 0 0 1 15 3.5v1a1.5 1.5 0 0 1-1 1.415V9A6 6 0 0 1 2 9V5.915A1.5 1.5 0 0 1 1 4.5zM2.5 5h11a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5M3 6v3a5 5 0 0 0 10 0V6z"></svg:path>`,
})
export class FluentCameraDome16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
