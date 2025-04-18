import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsUxIcon],svg[lineicons-ux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48.1 38.5c1.9 0 3.5-1.6 3.5-3.5v-7.4c0-1.9-1.6-3.5-3.5-3.5h-7.4c-1.9 0-3.5 1.6-3.5 3.5V29H26.8v-1.4c0-1.9-1.6-3.5-3.5-3.5h-1.4v-7.9h1.4c1.9 0 3.5-1.6 3.5-3.5V5.3c0-1.9-1.6-3.5-3.5-3.5h-7.4c-1.9 0-3.5 1.6-3.5 3.5v7.4c0 1.9 1.6 3.5 3.5 3.5h1.4v7.9h-1.4c-1.9 0-3.5 1.6-3.5 3.5V35c0 1.9 1.6 3.5 3.5 3.5h7.4c1.9 0 3.5-1.6 3.5-3.5v-1.4h10.4V35c0 1.9 1.6 3.5 3.5 3.5h1.4v9.3h-1.4c-1.9 0-3.5 1.6-3.5 3.5v7.4c0 1.9 1.6 3.5 3.5 3.5h7.4c1.9 0 3.5-1.6 3.5-3.5v-7.4c0-1.9-1.6-3.5-3.5-3.5h-1.4v-9.3zM16.9 6.2h5.4v5.4h-5.4zM22.3 34h-5.4v-5.4h5.4zm24.8 23.8h-5.4v-5.4h5.4zm-5.4-29.2h5.4V34h-5.4z"></svg:path>`,
})
export class LineiconsUxIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
