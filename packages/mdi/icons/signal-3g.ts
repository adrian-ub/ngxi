import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSignal3gIcon],svg[mdi-signal-3g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 16.5v-2.25C11 13 10 12 8.75 12C10 12 11 11 11 9.75V7.5a3 3 0 0 0-3-3H2v3h6v3H5v3h3v3H2v3h6a3 3 0 0 0 3-3m11 0v-6h-4.5v3H19v3h-3v-9h6v-3h-6a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3"></svg:path>`,
})
export class MdiSignal3gIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
