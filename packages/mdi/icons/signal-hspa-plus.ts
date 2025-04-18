import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSignalHspaPlusIcon],svg[mdi-signal-hspa-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8v3h3v3h-3v3h-3v-3h-3v-3h3V8zM5 10.5h3v-6h3v15H8v-6H5v6H2v-15h3z"></svg:path>`,
})
export class MdiSignalHspaPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
