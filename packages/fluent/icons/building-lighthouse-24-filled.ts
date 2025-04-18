import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBuildingLighthouse24FilledIcon],svg[fluent-building-lighthouse-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.694 2.21a1.25 1.25 0 0 0-1.385 0l-3.75 2.496c-1.029.686-.543 2.29.694 2.29H6.5v2.156a2.25 2.25 0 0 0-1.42 1.836l-1.063 9.058A1.75 1.75 0 0 0 5.755 22h8.499a1.75 1.75 0 0 0 1.738-1.954l-1.062-9.058a2.25 2.25 0 0 0-1.43-1.84V6.997h.25c1.237 0 1.723-1.605.693-2.29zM12 9H8V6.997h4zm1.952 6.531L5.77 17.986l.357-3.04l7.494-2.249zM16.22 4.22a.75.75 0 0 0 1.06 1.06l1.5-1.5a.75.75 0 0 0-1.06-1.06zm0 6a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06l-1.5-1.5a.75.75 0 0 0-1.06 0M20.25 7h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5"></svg:path>`,
})
export class FluentBuildingLighthouse24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
