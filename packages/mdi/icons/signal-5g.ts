import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSignal5gIcon],svg[mdi-signal-5g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16.5v-6h-4.5v3H19v3h-3v-9h6v-3h-6a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3m-12-12H3v9h4v3H3v3h5.5A1.5 1.5 0 0 0 10 18v-6a1.5 1.5 0 0 0-1.5-1.5H6v-3h4z"></svg:path>`,
})
export class MdiSignal5gIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
