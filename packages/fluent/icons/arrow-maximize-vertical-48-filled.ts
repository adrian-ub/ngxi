import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowMaximizeVertical48FilledIcon],svg[fluent-arrow-maximize-vertical-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.504 4.128a1.5 1.5 0 0 1 1.992 0l5.069 4.5a1.5 1.5 0 0 1-1.992 2.244L25 8.588v9.162a1.5 1.5 0 0 1-3 0V8.588l-2.573 2.284a1.5 1.5 0 1 1-1.991-2.244zm2 39.737a1.5 1.5 0 0 1-2.008 0l-5-4.5a1.5 1.5 0 0 1 2.008-2.23L22 39.382V30.25a1.5 1.5 0 1 1 3 0v9.132l2.497-2.247a1.5 1.5 0 1 1 2.006 2.23zM8.25 22.25a1.5 1.5 0 0 0 0 3h31.5a1.5 1.5 0 0 0 0-3z"></svg:path>`,
})
export class FluentArrowMaximizeVertical48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
