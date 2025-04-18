import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGojekIcon],svg[arcticons-gojek-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.898 45.301C9.026 43.188 1.538 33.161 2.6 22.137S12.925 2.699 24 2.699s20.338 8.414 21.4 19.438s-6.426 21.051-17.298 23.164"></svg:path><svg:circle cx="23.999" cy="24" r="8.6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsGojekIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
