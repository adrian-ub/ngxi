import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsUserScanDuotoneIcon],svg[lets-icons-user-scan-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="9" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M17.451 15.908a.24.24 0 0 1-.067.304A8.96 8.96 0 0 1 12 18a8.96 8.96 0 0 1-5.384-1.788a.24.24 0 0 1-.067-.304C7.499 14.192 9.582 13 12 13s4.501 1.191 5.451 2.908" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M17.5 3.5h.2c1.791 0 2.687 0 3.244.556c.556.557.556 1.453.556 3.244v.2m-4 13h.2c1.791 0 2.687 0 3.244-.556c.556-.557.556-1.453.556-3.244v-.2m-15-13h-.2c-1.791 0-2.687 0-3.243.556C2.5 4.614 2.5 5.51 2.5 7.3v.2m4 13h-.2c-1.791 0-2.687 0-3.243-.556C2.5 19.387 2.5 18.49 2.5 16.7v-.2"></svg:path></svg:g>`,
})
export class LetsIconsUserScanDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
