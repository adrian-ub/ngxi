import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCameraDome20RegularIcon],svg[fluent-camera-dome-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-3 4a3 3 0 1 1 6 0a3 3 0 0 1-6 0M2 4.5A1.5 1.5 0 0 1 3.5 3h13A1.5 1.5 0 0 1 18 4.5v1a1.5 1.5 0 0 1-1 1.415V11a7 7 0 1 1-14 0V6.915A1.5 1.5 0 0 1 2 5.5zM4 7v4a6 6 0 1 0 12 0V7zm-.5-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"></svg:path>`,
})
export class FluentCameraDome20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
