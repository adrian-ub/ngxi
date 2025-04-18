import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCheckmarkCircleWarning24FilledIcon],svg[fluent-checkmark-circle-warning-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10c0 1.042-.16 2.047-.455 2.992l-.804-1.609c-.921-1.844-3.553-1.844-4.474 0l-3.996 7.998a2.5 2.5 0 0 0-.216.619H12C6.477 22 2 17.523 2 12S6.477 2 12 2m3.22 6.97l-4.47 4.47l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06m1.941 4.86c.553-1.107 2.133-1.107 2.686 0l3.997 7.998A1.5 1.5 0 0 1 22.5 24h-7.994a1.5 1.5 0 0 1-1.343-2.172zm1.843 2.666a.5.5 0 0 0-1 0v3.001a.5.5 0 0 0 1 0zm-.5 5.503a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path>`,
})
export class FluentCheckmarkCircleWarning24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
