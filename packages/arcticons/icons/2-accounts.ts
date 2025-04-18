import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons2AccountsIcon],svg[arcticons-2-accounts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.878 17.966a10.7 10.7 0 0 0-1.236-1.48c-4.15-4.151-10.879-4.151-15.03 0s-4.15 10.878 0 15.029s10.88 4.15 15.03 0h0l6.553-6.553"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.123 30.034q.54.784 1.235 1.48c4.15 4.151 10.879 4.151 15.03 0s4.15-10.878 0-15.029s-10.88-4.15-15.03 0h0l-6.553 6.553"></svg:path>`,
})
export class Arcticons2AccountsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
