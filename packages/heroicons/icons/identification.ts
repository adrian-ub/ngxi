import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsIdentificationIcon],svg[heroicons-identification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5m6-10.125a1.875 1.875 0 1 1-3.75 0a1.875 1.875 0 0 1 3.75 0m1.294 6.336a6.7 6.7 0 0 1-3.17.789a6.7 6.7 0 0 1-3.168-.789a3.376 3.376 0 0 1 6.338 0"></svg:path>`,
})
export class HeroiconsIdentificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
