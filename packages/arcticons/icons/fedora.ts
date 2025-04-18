import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFedoraIcon],svg[arcticons-fedora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.955 8.21a9.25 9.25 0 0 0-15.79 6.54v18.5a9.25 9.25 0 0 1-15.792 6.54M14.914 24h18.5M6.78 37.66a9.254 9.254 0 0 1 5.358-13.236m24.027-.84a9.254 9.254 0 0 0 5.383-13.243"></svg:path>`,
})
export class ArcticonsFedoraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
