import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTapSingle32FilledIcon],svg[fluent-tap-single-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5a6 6 0 0 0-4.88 9.491a5.5 5.5 0 0 0-2.123.38a8 8 0 1 1 14.584-1.312a6 6 0 0 0-.533-.13l-1.444-.28A6 6 0 0 0 16 5m.002 3a3 3 0 0 0-3 3v5.495l-.449-.189a4 4 0 0 0-5.41 2.642l-.09.332a1.51 1.51 0 0 0 .963 1.817c4.74 1.653 6.227 3.924 6.801 5.503c.3.824 1.116 1.48 2.113 1.398l4.76-.388a3 3 0 0 0 2.649-2.194l1.52-5.526a4 4 0 0 0-3.097-4.988l-3.76-.727V11a3 3 0 0 0-3-3"></svg:path>`,
})
export class FluentTapSingle32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
