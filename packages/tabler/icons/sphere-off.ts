import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSphereOffIcon],svg[tabler-sphere-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12c0 1.657 4.03 3 9 3c.987 0 1.936-.053 2.825-.15m3.357-.67C19.917 13.633 21 12.86 21 12"></svg:path><svg:path d="M20.051 16.027A9 9 0 0 0 7.968 3.952m-2.34 1.692a9 9 0 0 0 12.74 12.716M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerSphereOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
