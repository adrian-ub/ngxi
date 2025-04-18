import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShieldKeyhole20FilledIcon],svg[fluent-shield-keyhole-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.277 2.084a.5.5 0 0 0-.554 0a15.05 15.05 0 0 1-6.294 2.421A.5.5 0 0 0 3 5v4.5c0 3.891 2.307 6.73 6.82 8.467a.5.5 0 0 0 .36 0C14.693 16.23 17 13.39 17 9.5V5a.5.5 0 0 0-.43-.495a15.05 15.05 0 0 1-6.293-2.421M11.5 9a1.5 1.5 0 0 1-1 1.415V12.5a.5.5 0 0 1-1 0v-2.085A1.5 1.5 0 1 1 11.5 9"></svg:path>`,
})
export class FluentShieldKeyhole20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
