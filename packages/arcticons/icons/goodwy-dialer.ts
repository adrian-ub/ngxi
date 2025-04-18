import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGoodwyDialerIcon],svg[arcticons-goodwy-dialer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24.076" cy="23.799" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.797 16.217a16.3 16.3 0 0 1-.597-2.968c-.106-1.003-.981-1.749-1.99-1.749h-4.678c-1.203 0-2.13 1.039-2.024 2.237c1.067 12.072 10.683 21.688 22.755 22.755c1.198.106 2.237-.818 2.237-2.02V30.3c0-1.523-.746-2.395-1.749-2.501a16.3 16.3 0 0 1-2.968-.597a3.32 3.32 0 0 0-3.298.843l-2.002 2.002a21.17 21.17 0 0 1-8.53-8.531l2.001-2.002a3.32 3.32 0 0 0 .843-3.298Z"></svg:path>`,
})
export class ArcticonsGoodwyDialerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
