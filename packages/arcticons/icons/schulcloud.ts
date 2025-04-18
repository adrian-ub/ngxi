import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSchulcloudIcon],svg[arcticons-schulcloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.235 34.518c5.769.059 10.259-3.524 10.029-8.002S21.171 18.36 15.403 18.3c-5.77-.058-10.26 3.525-10.03 8.003c.144 2.8 2.138 5.42 5.275 6.932l-.692 4.882z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.486 33.897h14.13c10.305.214 14.499-12.861 2.47-16.296c0-9.235-8.167-9.449-12.243-5.373C20.767 8.152 8.5 6.94 8.311 20.468"></svg:path>`,
})
export class ArcticonsSchulcloudIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
