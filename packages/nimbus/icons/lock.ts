import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusLockIcon],svg[nimbus-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.25 11.2v1.42h1.5V11.2a1.48 1.48 0 0 0 .85-1.32A1.55 1.55 0 0 0 8 8.38a1.55 1.55 0 0 0-1.6 1.5a1.48 1.48 0 0 0 .85 1.32"></svg:path><svg:path fill="currentColor" d="M14.75 5H13.5A5.29 5.29 0 0 0 8 0a5.29 5.29 0 0 0-5.5 5H1.25A1.25 1.25 0 0 0 0 6.25v8.5A1.25 1.25 0 0 0 1.25 16h13.5A1.25 1.25 0 0 0 16 14.75v-8.5A1.25 1.25 0 0 0 14.75 5M8 1.25A4.05 4.05 0 0 1 12.25 5h-8.5A4.05 4.05 0 0 1 8 1.25m6.75 13.5H1.25v-8.5h13.5z"></svg:path>`,
})
export class NimbusLockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
