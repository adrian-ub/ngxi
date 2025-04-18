import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLocation24FilledIcon],svg[fluent-location-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.157 16.882l-1.187 1.174q-1.312 1.288-3.406 3.312a2.25 2.25 0 0 1-3.128 0l-3.49-3.396q-.66-.646-1.103-1.09a8.707 8.707 0 1 1 12.314 0M14.501 11a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0"></svg:path>`,
})
export class FluentLocation24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
