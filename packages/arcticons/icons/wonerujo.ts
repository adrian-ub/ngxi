import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWonerujoIcon],svg[arcticons-wonerujo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.69 28.847l.02-15.472m15.6 16.116c.081-5.299-.005-10.817-.005-16.116c-.209-3.57-.695-7.039-7.349-8.766M8.233 13.375v15.471c0 8.11 15.342 8.213 15.471 0c-.01 8.29 15.471 7.98 15.6.645m-31.086-.644v6.961"></svg:path><svg:circle cx="39.032" cy="42.642" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsWonerujoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
