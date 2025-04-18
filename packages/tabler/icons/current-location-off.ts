import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCurrentLocationOffIcon],svg[tabler-current-location-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14.685 10.661c-.3-.6-.795-1.086-1.402-1.374m-3.397.584a3 3 0 1 0 4.24 4.245"></svg:path><svg:path d="M6.357 6.33a8 8 0 1 0 11.301 11.326m1.642-2.378A8 8 0 0 0 8.703 4.709M12 2v2m0 16v2m8-10h2M2 12h2M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerCurrentLocationOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
