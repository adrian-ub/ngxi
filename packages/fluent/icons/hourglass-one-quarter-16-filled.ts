import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHourglassOneQuarter16FilledIcon],svg[fluent-hourglass-one-quarter-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.113 11l-.095.08c-.296.257-.518.496-.683.806c-.13.247-.256.595-.31 1.114h5.946c-.054-.52-.179-.868-.31-1.114c-.164-.31-.386-.55-.681-.806L9.885 11z"></svg:path>`,
})
export class FluentHourglassOneQuarter16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
