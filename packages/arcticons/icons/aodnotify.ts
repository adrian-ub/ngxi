import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAodnotifyIcon],svg[arcticons-aodnotify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.001 24a14.75 14.75 0 1 1-14.75-14.75h21.633c1.967 0 3.556 1.531 1.967 4.481s-1.361 3.461-5.067 3.461H19.252A6.808 6.808 0 1 0 26.06 24c0-.268.444-.615.817-.615h6.387a.65.65 0 0 1 .737.615"></svg:path>`,
})
export class ArcticonsAodnotifyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
