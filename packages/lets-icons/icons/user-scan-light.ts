import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsUserScanLightIcon],svg[lets-icons-user-scan-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="M17.5 3.5h.2c1.791 0 2.687 0 3.244.556c.556.557.556 1.453.556 3.244v.2m-4 13h.2c1.791 0 2.687 0 3.244-.556c.556-.557.556-1.453.556-3.244v-.2m-15-13h-.2c-1.791 0-2.687 0-3.243.556C2.5 4.614 2.5 5.51 2.5 7.3v.2m4 13h-.2c-1.791 0-2.687 0-3.243-.556C2.5 19.387 2.5 18.49 2.5 16.7v-.2m4.715-.715c.473-.683 1.16-1.26 2.002-1.665A6.45 6.45 0 0 1 12 13.5c.981 0 1.941.216 2.783.62c.842.405 1.53.982 2.002 1.665"></svg:path><svg:circle cx="12" cy="9" r="2.5"></svg:circle></svg:g>`,
})
export class LetsIconsUserScanLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
