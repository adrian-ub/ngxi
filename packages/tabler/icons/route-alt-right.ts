import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRouteAltRightIcon],svg[tabler-route-alt-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 3h5v5M8 3H3v5"></svg:path><svg:path d="m21 3l-7.536 7.536A5 5 0 0 0 12 14.07V21M6 6.01V6m2 2.02v-.01M10 10v.01"></svg:path></svg:g>`,
})
export class TablerRouteAltRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
