import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDhanIcon],svg[arcticons-dhan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.341 19.684c-6.678-.43-11.094 5.955-9.09 10.498c2.637 5.976 14.385 6.11 20.641-2.382M15.195 13.658c4.888-3.85 2.536-8.8-2.847-8.09c-4.458.682-7.266 5.332-6.535 8.855c.982 4.735 6.731 6.925 10.432 5.883m15.646-13.12V42.5m-8.12-35.312h18.531"></svg:path>`,
})
export class ArcticonsDhanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
