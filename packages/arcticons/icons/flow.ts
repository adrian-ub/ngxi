import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFlowIcon],svg[arcticons-flow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.545 27.642a3.117 3.117 0 0 1 0-4.417l12.307-12.307a3.117 3.117 0 0 1 4.417 0l.186.186a3.117 3.117 0 0 1 0 4.417l-12.16 12.16l-2.355 2.356l-2.353-2.353z"></svg:path><svg:path d="m14.94 30.037l8.853-8.933a3.11 3.11 0 0 1 4.418 0l.186.187a3.117 3.117 0 0 1 0 4.417l-8.853 8.933z"></svg:path><svg:path d="m24.147 30.037l2.418 2.442a3.12 3.12 0 0 1 0 4.417l-.186.186a3.117 3.117 0 0 1-4.418 0l-2.418-2.441z"></svg:path></svg:g><svg:circle cx="24" cy="24" r="18.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsFlowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
