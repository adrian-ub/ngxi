import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentZoomIn32LightIcon],svg[fluent-zoom-in-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 13a.5.5 0 0 1 .5-.5h4v-4a.5.5 0 0 1 1 0v4h4a.5.5 0 0 1 0 1h-4v4a.5.5 0 0 1-1 0v-4h-4A.5.5 0 0 1 8 13m11.709 7.416l8.437 8.438a.5.5 0 0 0 .708-.708l-8.438-8.437A9.96 9.96 0 0 0 23 13c0-5.523-4.477-10-10-10S3 7.477 3 13s4.477 10 10 10a9.96 9.96 0 0 0 6.709-2.584M22 13a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path>`,
})
export class FluentZoomIn32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
