import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSignalHspaIcon],svg[mdi-signal-hspa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 10.5h3v-6h3v15h-3v-6h-3v6h-3v-15h3z"></svg:path>`,
})
export class MdiSignalHspaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
