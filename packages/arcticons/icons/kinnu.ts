import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKinnuIcon],svg[arcticons-kinnu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.84 13.915c6.782-4.967 18.55-11.39 21.647-6.892c2.805 4.074-6.868 10.35-12.15 16.03c-5.074 5.454-13.903 16.105-17.486 13.886c-4.186-2.593 1.47-18.25 7.99-23.024"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.698 11.133c-3.81 2.889-1.104 14.074 7.556 22.462c10.18 9.861 20.425 9.886 21.978 7.81c2.913-3.894-5.993-10.757-11.895-16.667C22.096 19.49 12.77 8.802 9.697 11.133"></svg:path>`,
})
export class ArcticonsKinnuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
