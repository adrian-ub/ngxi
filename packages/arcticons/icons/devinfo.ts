import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDevinfoIcon],svg[arcticons-devinfo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.565 22.238v17.57a2.687 2.687 0 0 1-2.693 2.692h-16.24a2.687 2.687 0 0 1-2.693-2.693l-.003-31.614A2.687 2.687 0 0 1 15.63 5.5h16.243a2.687 2.687 0 0 1 2.692 2.693v1.5M17.973 37.55l10.927-.057"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.48 19.818a6.345 6.345 0 1 1 11.385-3.852h0a6.345 6.345 0 0 1-9.278 5.626l-3.534 1.325z"></svg:path><svg:circle cx="35.524" cy="11.974" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.524 14.55v5.795"></svg:path>`,
})
export class ArcticonsDevinfoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
