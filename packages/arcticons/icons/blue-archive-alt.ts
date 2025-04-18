import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBlueArchiveAltIcon],svg[arcticons-blue-archive-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.736 4.516L9.79 43.484M8.249 10.253L39.75 29.108m-3.132-2.498c-2.248 3.94-9.858 3.83-16.998-.246q0 0 0 0c-7.14-4.075-11.105-10.572-8.857-14.51v-.001c2.249-3.939 9.859-3.828 16.998.247s11.104 10.571 8.857 14.51"></svg:path>`,
})
export class ArcticonsBlueArchiveAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
