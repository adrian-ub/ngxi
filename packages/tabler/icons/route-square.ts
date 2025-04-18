import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRouteSquareIcon],svg[tabler-route-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17h4v4H3zM17 3h4v4h-4zm-6 16h5.5a3.5 3.5 0 0 0 0-7h-8a3.5 3.5 0 0 1 0-7H13"></svg:path>`,
})
export class TablerRouteSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
