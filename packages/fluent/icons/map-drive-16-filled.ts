import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMapDrive16FilledIcon],svg[fluent-map-drive-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3.5A1.5 1.5 0 0 1 2.5 2h11A1.5 1.5 0 0 1 15 3.5v2.996a.5.5 0 0 1-.5.5H8.511V8H9.5a.5.5 0 0 1 .5.5V10h1a.5.5 0 0 1 .5.5v1h3a.5.5 0 0 1 0 1h-3v1a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5v-1h-3a.5.5 0 0 1 0-1h3v-1A.5.5 0 0 1 5 10h1V8.5a.5.5 0 0 1 .5-.5h1.011V6.996H1.5a.5.5 0 0 1-.5-.5zM12.5 5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path>`,
})
export class FluentMapDrive16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
