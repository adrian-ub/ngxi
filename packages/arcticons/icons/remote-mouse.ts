import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRemoteMouseIcon],svg[arcticons-remote-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="21.522" height="34.878" x="10.222" y="9.578" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="10.761" transform="rotate(45 20.983 27.017)"></svg:rect><svg:circle cx="25.61" cy="22.39" r="1.92" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.724 14.577a9.66 9.66 0 0 0-5.257-5.283m9.033 3.678A13.78 13.78 0 0 0 35.028 5.5"></svg:path>`,
})
export class ArcticonsRemoteMouseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
