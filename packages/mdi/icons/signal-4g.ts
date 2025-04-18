import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSignal4gIcon],svg[mdi-signal-4g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16.5v-6h-4.5v3H19v3h-3v-9h6v-3h-6a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3m-14 3h3v-15H8v6H5v-6H2v9h6z"></svg:path>`,
})
export class MdiSignal4gIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
