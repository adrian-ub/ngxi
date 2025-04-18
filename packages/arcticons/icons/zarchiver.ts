import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZarchiverIcon],svg[arcticons-zarchiver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.89 7.05h23.53l-11 25.42h13.17L34.26 41H4.51l11-25.42h-5zm23.53 0L43.51 41h-9.25L24 17.25"></svg:path>`,
})
export class ArcticonsZarchiverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
