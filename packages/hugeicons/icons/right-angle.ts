import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRightAngleIcon],svg[hugeicons-right-angle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 5c.393-.405 1.44-2 2-2s1.607 1.595 2 2m12 12c.405.393 2 1.44 2 2s-1.595 1.607-2 2M5 12h1c2.828 0 4.243 0 5.121.879C12 13.757 12 15.172 12 18v1"></svg:path><svg:path d="M21 19H11c-2.828 0-4.243 0-5.121-.879C5 17.243 5 15.828 5 13V3"></svg:path></svg:g>`,
})
export class HugeiconsRightAngleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
