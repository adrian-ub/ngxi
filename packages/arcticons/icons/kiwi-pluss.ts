import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKiwiPlussIcon],svg[arcticons-kiwi-pluss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 14.25c0 10.772-8.728 19.5-19.5 19.5S4.5 25.022 4.5 14.25h8.717c0 5.955 4.828 10.783 10.783 10.783s10.783-4.827 10.783-10.783z"></svg:path>`,
})
export class ArcticonsKiwiPlussIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
