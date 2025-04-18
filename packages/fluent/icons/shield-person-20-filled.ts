import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShieldPerson20FilledIcon],svg[fluent-shield-person-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.277 2.084a.5.5 0 0 0-.554 0a15.05 15.05 0 0 1-6.294 2.421A.5.5 0 0 0 3 5v4.5c0 3.891 2.307 6.73 6.82 8.467a.5.5 0 0 0 .36 0C14.693 16.23 17 13.39 17 9.5V5a.5.5 0 0 0-.43-.495a15.05 15.05 0 0 1-6.293-2.421M10 9.5a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 5c-2.5 0-3.5-1.25-3.5-2.5A1.5 1.5 0 0 1 8 10.5h4a1.5 1.5 0 0 1 1.5 1.5c0 1.245-1 2.5-3.5 2.5"></svg:path>`,
})
export class FluentShieldPerson20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
