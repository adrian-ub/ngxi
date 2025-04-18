import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSadAlt2LightIcon],svg[lets-icons-sad-alt-2-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:circle cx="12" cy="12" r="9.5"></svg:circle><svg:path d="M8.43 16.761a12 12 0 0 1 1.534-.193A29 29 0 0 1 12 16.5c.712 0 1.414.023 2.036.068c.618.045 1.15.11 1.534.193"></svg:path><svg:path fill="currentColor" d="M9.5 10c.24 0 .36 0 .433.123c.073.122.03.2-.055.356a1 1 0 0 1-1.756 0c-.085-.156-.128-.234-.055-.356C8.14 10 8.26 10 8.5 10zm6 0c.24 0 .36 0 .433.123c.073.122.03.2-.055.356a1 1 0 0 1-1.756 0c-.085-.156-.128-.234-.055-.356C14.14 10 14.26 10 14.5 10z"></svg:path></svg:g>`,
})
export class LetsIconsSadAlt2LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
