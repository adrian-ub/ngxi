import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWatertrackerIcon],svg[arcticons-watertracker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5c0 3.945-12 13.717-12 27.405A11.803 11.803 0 0 0 24 43.5a11.803 11.803 0 0 0 12-11.595C36 18.217 24 8.445 24 4.5"></svg:path>`,
})
export class ArcticonsWatertrackerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
