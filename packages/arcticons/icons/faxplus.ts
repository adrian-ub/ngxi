import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFaxplusIcon],svg[arcticons-faxplus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 26.478c3.465-8.502 11.23-14.765 14.984-11.518l10.043 8.882c-3.754-3.247-10.717 2.797-14.182 11.3z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.02 20.741c2.047-2.288 4.084-5.098 5.875-7.882L43.5 22.452m0 0c-4.973 8.775-12.481 14.751-16.444 11.382l-7.34-6.108"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.527 23.842c3.064 3.086-5.856 7.201-2.47 9.993"></svg:path>`,
})
export class ArcticonsFaxplusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
