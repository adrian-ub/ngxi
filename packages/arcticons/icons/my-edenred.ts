import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyEdenredIcon],svg[arcticons-my-edenred-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.5 24c0 11.87-9.63 21.5-21.5 21.5a21.41 21.41 0 0 1-16.42-7.64c-.86-1.01-1.62-2.09-2.26-3.24a7.47 7.47 0 0 0 6.17 3.24h12.43l1.03-5.69H13.58c-1.42 0-2.58-1.16-2.58-2.59v-3.79h11.06l.92-5.46H11v-6.28h13.29l.87-5.69H9.26C13.11 4.73 18.29 2.5 24 2.5c11.87 0 21.5 9.63 21.5 21.5"></svg:path>`,
})
export class ArcticonsMyEdenredIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
