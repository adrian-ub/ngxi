import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCliptIcon],svg[arcticons-clipt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.391 43.5h-4.953c-6.96 0-12.603-5.643-12.603-12.603V18.364a3.78 3.78 0 0 1 3.78-3.781h12.687a3.78 3.78 0 0 1 3.78 3.78v11.35a3.78 3.78 0 0 1-3.78 3.78h-2.603a3.78 3.78 0 0 1-3.782-3.78V8.28a3.78 3.78 0 0 1 3.782-3.78h3.864c6.96 0 12.603 5.643 12.603 12.603v13.794"></svg:path>`,
})
export class ArcticonsCliptIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
