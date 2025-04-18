import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentImageCircle48FilledIcon],svg[fluent-image-circle-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M37.096 39.116A19.92 19.92 0 0 1 24 44a19.92 19.92 0 0 1-13.096-4.884l12.39-12.325a1 1 0 0 1 1.411 0zm1.784-1.752L26.468 25.02a3.5 3.5 0 0 0-4.936 0L9.12 37.364A19.93 19.93 0 0 1 4 24C4 12.954 12.954 4 24 4s20 8.954 20 20c0 5.137-1.937 9.822-5.12 13.364M35 17a4 4 0 1 0-8 0a4 4 0 0 0 8 0"></svg:path>`,
})
export class FluentImageCircle48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
