import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSignalDistanceVariantIcon],svg[mdi-signal-distance-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6V4a12 12 0 0 1 12 12h-2A10 10 0 0 0 4 6m0 4V8a8 8 0 0 1 8 8h-2a6 6 0 0 0-6-6m0 2a4 4 0 0 1 4 4H4zm-1 6h16v-2l3 3l-3 3v-2H3z"></svg:path>`,
})
export class MdiSignalDistanceVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
