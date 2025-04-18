import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNumberCircle6Icon],svg[arcticons-number-circle-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="26.7" r="5.3"></svg:circle><svg:path d="M28.832 17.951c-.884-1.156-2.23-1.951-4.46-1.951H24a5.3 5.3 0 0 0-5.3 5.3v5.4"></svg:path></svg:g>`,
})
export class ArcticonsNumberCircle6Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
