import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLocationCheckmark16FilledIcon],svg[fluent-location-checkmark-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 7c0 2.876-3.1 6.01-4.844 7.544a1.736 1.736 0 0 1-2.312 0C5.101 13.01 2 9.876 2 7a6 6 0 1 1 12 0m-3.88-1.836L7.25 8.042L5.854 6.646l-.07-.058a.5.5 0 0 0-.638.765l1.75 1.75l.07.058a.5.5 0 0 0 .638-.058l3.224-3.233l.058-.07a.5.5 0 0 0-.766-.636"></svg:path>`,
})
export class FluentLocationCheckmark16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
