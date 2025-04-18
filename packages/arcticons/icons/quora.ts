import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQuoraIcon],svg[arcticons-quora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="13.6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m40.6 37.6l4.3 4.6c.4.4.6.8.6 1.4c0 1.1-.9 1.9-1.9 1.9H24C12.1 45.5 2.5 35.9 2.5 24S12.1 2.5 24 2.5S45.5 12.1 45.5 24c0 5.2-1.8 9.9-4.9 13.6"></svg:path>`,
})
export class ArcticonsQuoraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
