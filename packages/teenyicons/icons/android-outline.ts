import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsAndroidOutlineIcon],svg[teenyicons-android-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m2.5 2.5l2 3m8-3l-2 3M4 9.5h1m5 0h1m-9.5 3v-2a6 6 0 1 1 12 0v2z"></svg:path>`,
})
export class TeenyiconsAndroidOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
