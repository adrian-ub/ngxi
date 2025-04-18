import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMapPinCancelIcon],svg[tabler-map-pin-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></svg:path><svg:path d="M12.463 21.431a2 2 0 0 1-1.876-.531l-4.244-4.243a8 8 0 1 1 13.594-4.655M16 19a3 3 0 1 0 6 0a3 3 0 1 0-6 0m1 2l4-4"></svg:path></svg:g>`,
})
export class TablerMapPinCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
