import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZmninjaIcon],svg[arcticons-zmninja-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m2.67 23.63l41.11-8C33.4-6.39 2.86 1.37 2.67 23.63M9.7 25l7.62-1.55c.77 5.8-7.32 6.2-7.62 1.55m18.8-3.66l7.62-1.55c.77 5.83-7.32 6.21-7.62 1.55M4.41 32.68l40.92-8.07c.25 20.66-29.67 30.55-40.92 8.07"></svg:path>`,
})
export class ArcticonsZmninjaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
