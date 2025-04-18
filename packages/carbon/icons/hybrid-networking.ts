import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonHybridNetworkingIcon],svg[carbon-hybrid-networking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 24.184V20h-2v4.184a3 3 0 1 0 2 0"></svg:path><svg:path fill="currentColor" d="M26 12a3.996 3.996 0 0 0-3.858 3H9.858a4 4 0 1 0 0 2h12.284A3.993 3.993 0 1 0 26 12M6 18a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2m20 0a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M19 5a3 3 0 1 0-4 2.816V12h2V7.816A2.99 2.99 0 0 0 19 5"></svg:path>`,
})
export class CarbonHybridNetworkingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
