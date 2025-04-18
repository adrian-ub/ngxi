import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPerspectiveOffIcon],svg[tabler-perspective-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8.511 4.502l9.63 1.375a1 1 0 0 1 .859.99V15m-.859 3.123l-12 1.714A1 1 0 0 1 5 18.847V5.153a1 1 0 0 1 .01-.137M3 3l18 18"></svg:path>`,
})
export class TablerPerspectiveOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
