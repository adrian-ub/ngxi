import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRouteAltLeftIcon],svg[tabler-route-alt-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 3H3v5m13-5h5v5"></svg:path><svg:path d="m3 3l7.536 7.536A5 5 0 0 1 12 14.07V21m6-14.99V6m-2 2.02v-.01M14 10v.01"></svg:path></svg:g>`,
})
export class TablerRouteAltLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
