import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityWifiSolidIcon],svg[clarity-wifi-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="29.54" r="3" fill="currentColor" class="clr-i-solid clr-i-solid-path-1"></svg:circle><svg:path fill="currentColor" d="M32.76 9.38a27.87 27.87 0 0 0-29.57 0a1.51 1.51 0 0 0-.48 2.11l.11.17a1.49 1.49 0 0 0 2 .46a24.68 24.68 0 0 1 26.26 0a1.49 1.49 0 0 0 2-.46l.11-.17a1.51 1.51 0 0 0-.43-2.11" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="currentColor" d="M28.82 15.44a20.59 20.59 0 0 0-21.7 0a1.51 1.51 0 0 0-.46 2.1l.11.17a1.49 1.49 0 0 0 2 .46a17.4 17.4 0 0 1 18.36 0a1.49 1.49 0 0 0 2-.46l.11-.17a1.51 1.51 0 0 0-.42-2.1" class="clr-i-solid clr-i-solid-path-3"></svg:path><svg:path fill="currentColor" d="M24.88 21.49a13.41 13.41 0 0 0-13.82 0a1.5 1.5 0 0 0-.46 2.09l.1.16a1.52 1.52 0 0 0 2.06.44a10.27 10.27 0 0 1 10.42 0a1.52 1.52 0 0 0 2.06-.45l.1-.16a1.49 1.49 0 0 0-.46-2.08" class="clr-i-solid clr-i-solid-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityWifiSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
