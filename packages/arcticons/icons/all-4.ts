import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAll4Icon],svg[arcticons-all-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.59 43.5h-7.051m-4.938 0v-9.804m4.938 5.721v-5.721M17.513 43.5h1.655m4.433-14.026H9.173m29.061 0h-9.695m0-4.469v-12.99m0-4.917V4.5m-4.938 4.918v15.587m-3.685-9.619l-8.958 10.545"></svg:path>`,
})
export class ArcticonsAll4Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
