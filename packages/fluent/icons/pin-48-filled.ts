import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPin48FilledIcon],svg[fluent-pin-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31.818 5.55L42.45 16.183c2.293 2.292 1.665 6.157-1.234 7.607L30.67 29.062a1.25 1.25 0 0 0-.622.71l-2.684 7.77c-.664 1.92-3.108 2.483-4.544 1.047L17 32.769L7.768 42H6v-1.767L15.232 31l-5.82-5.82c-1.437-1.436-.874-3.88 1.046-4.544l7.77-2.684a1.25 1.25 0 0 0 .71-.623L24.21 6.785c1.45-2.9 5.315-3.527 7.608-1.235"></svg:path>`,
})
export class FluentPin48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
