import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTornadoFillIcon],svg[ph-tornado-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 228a12 12 0 0 1-12 12h-16a12 12 0 0 1 0-24h16a12 12 0 0 1 12 12m76-196H60a12 12 0 0 0 0 24a12 12 0 0 1 0 24H44a12 12 0 0 0 0 24h32a12 12 0 0 1 0 24a12 12 0 0 0 0 24h48a12 12 0 0 1 0 24a12 12 0 0 0 0 24h48a12 12 0 0 0 0-24a12 12 0 0 1 0-24h16a12 12 0 0 0 0-24h-24a12 12 0 0 1 0-24a12 12 0 0 0 0-24a12 12 0 0 1 0-24h56a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhTornadoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
