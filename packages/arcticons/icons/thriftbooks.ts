import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsThriftbooksIcon],svg[arcticons-thriftbooks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="8.759" height="36.737" x="19.796" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.302" ry="1.302"></svg:rect><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="6.569" height="27.553" x="31.798" y="14.741" rx=".976" ry=".976" transform="rotate(-10 35.083 28.517)"></svg:rect><svg:path d="m30.324 19.582l2.143-.378"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.796 38.027h8.759m-8.759-2.536h8.759m-8.758-2.309h8.758"></svg:path><svg:rect width="31.385" height="7.056" x="-2.222" y="23.017" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.302" ry="1.302" transform="rotate(-79.865 13.47 26.545)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.636 17.055l6.467 1.154"></svg:path>`,
})
export class ArcticonsThriftbooksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
