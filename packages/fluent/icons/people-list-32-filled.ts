import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPeopleList32FilledIcon],svg[fluent-people-list-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 16a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M23 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8M5 18a3 3 0 0 0-3 3v.15S2 27 10.5 27c1.659 0 2.993-.223 4.068-.581A2.5 2.5 0 0 1 15.5 25a2.5 2.5 0 0 1-1-2c0-.818.393-1.544 1-2a2.496 2.496 0 0 1-.792-3zm12 0a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H17a1 1 0 0 1-1-1"></svg:path>`,
})
export class FluentPeopleList32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
