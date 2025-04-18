import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineLtePlusMobiledataIcon],svg[ic-baseline-lte-plus-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 14h3v2H1V8h2zm2-4h2v6h2v-6h2V8H5zm7 6h5v-2h-3v-1h3v-2h-3v-1h3V8h-5zm12-5h-2V9h-2v2h-2v2h2v2h2v-2h2z"></svg:path>`,
})
export class IcBaselineLtePlusMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
