import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCodeCircle32RegularIcon],svg[fluent-code-circle-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.918 9.394a1 1 0 0 0-1.838-.788l-6 14a1 1 0 1 0 1.838.788zm-8.26 3.859a1 1 0 1 0-1.316-1.505l-4 3.5a1 1 0 0 0 0 1.505l4 3.5a1 1 0 1 0 1.316-1.505L8.519 16zm8.59 6.906a1 1 0 0 1 .093-1.412L23.482 16l-3.14-2.747a1 1 0 0 1 1.317-1.505l4 3.5a1 1 0 0 1 0 1.505l-4 3.5a1 1 0 0 1-1.41-.094M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16S8.268 2 16 2m12 14c0-6.627-5.373-12-12-12S4 9.373 4 16s5.373 12 12 12s12-5.373 12-12"></svg:path>`,
})
export class FluentCodeCircle32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
