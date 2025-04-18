import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWonderousIcon],svg[arcticons-wonderous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.227 39.987V19.222c.826-19.63 28.72-19.63 29.546 0v20.766"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.438 19.429v10.434L24 22.218l-7.438 7.748V19.43c.31-9.918 14.566-9.918 14.876 0M24 43.5V31.929m-5.785 5.786h11.57m-8.058 2.272l4.546-4.442m-4.546 0l4.546 4.442"></svg:path>`,
})
export class ArcticonsWonderousIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
