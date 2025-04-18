import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJust24hoursIcon],svg[arcticons-just24hours-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.21 32.84V14.76l-6.75 8.56l-.72.84l-2.17 2.77H37.5m-27-6.14a6 6 0 0 1 6-6a6 6 0 0 1 6 6A5.33 5.33 0 0 1 20.75 25c-2.42 2.16-10.25 7.83-10.25 7.83h11.93"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsJust24hoursIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
