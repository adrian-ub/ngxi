import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNotifyformibandIcon],svg[arcticons-notifyformiband-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="33.06" height="11.63" x="7.47" y="29.01" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.81"></svg:rect><svg:circle cx="13.3" cy="34.83" r="5.81" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.24 11.39a2.16 2.16 0 1 1 0-3.05a2.13 2.13 0 0 1 .63 1.49a2.18 2.18 0 0 1-.63 1.56m7.6-1.52a.9.9 0 0 0-.91.9h0V21.2a.9.9 0 0 0 .9.91H43a.9.9 0 0 0 .91-.9h0V10.77a.9.9 0 0 0-.9-.9zm15.29 1.76l-7.22 5.31l-7.22-5.31M4.89 22.7l9.82-9.82m-4.07 4.06L14 20.39l-3.67 3.68"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.15 13.05l-3.14 3.13l-6.67-6.67m0 0L8.46 12.4"></svg:path>`,
})
export class ArcticonsNotifyformibandIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
