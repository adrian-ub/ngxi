import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTent12FilledIcon],svg[fluent-tent-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.432 1.457a.5.5 0 0 0-.768 0c-.727.873-2.18 1.924-3.017 2.391a.5.5 0 0 0-.252.369l-.658 4.781h-.233a.5.5 0 1 0 0 1h8.993a.5.5 0 1 0 0-1h-.137l-.659-4.781a.5.5 0 0 0-.251-.369c-.837-.467-2.29-1.518-3.018-2.39m-1.599 7.54c.407-.633.818-1.417 1.202-2.505c.354.999.744 1.775 1.206 2.505z"></svg:path>`,
})
export class FluentTent12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
