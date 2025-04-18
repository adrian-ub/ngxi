import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonServerProxyIcon],svg[carbon-server-proxy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 30h20a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2m0-8h20v6H6Z"></svg:path><svg:circle cx="9" cy="25" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m26 2l-1.41 1.41L27.17 6h-4.855A6.984 6.984 0 0 0 9.08 10H4.83l2.58-2.59L6 6l-5 5l5 5l1.41-1.41L4.83 12h4.855A6.984 6.984 0 0 0 22.92 8h4.25l-2.58 2.59L26 12l5-5Zm-5 7a4.983 4.983 0 0 1-8.974 3H16v-2h-4.899a4.985 4.985 0 0 1 8.874-4H16v2h4.899A5 5 0 0 1 21 9"></svg:path>`,
})
export class CarbonServerProxyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
