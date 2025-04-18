import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPoparideIcon],svg[arcticons-poparide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.9 28.4c-2-4.5-.8-9.8 3.1-12.9c4.2-3.5 10.4-3.3 14.4.4c3.5 3.2 4.5 8.3 2.7 12.6"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.1 28.4c-.7 1.1-1.3 3-3.3 2.2m-16.9-2.2c.7 1.1 1.3 3 3.3 2.2m0 0c4-2 9.8-2.1 13.6 0"></svg:path>`,
})
export class ArcticonsPoparideIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
