import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCarinfoIcon],svg[arcticons-carinfo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.786 28.28s-.113.883 0 1.303c.079.291.155.782.456.782h1.695c.301 0 .377-.49.456-.782c.113-.42 0-1.303 0-1.303"></svg:path><svg:rect width="22.808" height="8.471" x="10.505" y="19.808" rx="2.607" ry="2.607"></svg:rect><svg:path d="M28.426 28.28s-.114.883 0 1.303c.079.291.154.782.456.782h1.694c.302 0 .377-.49.456-.782c.114-.42 0-1.303 0-1.303"></svg:path><svg:circle cx="14.089" cy="24.37" r="1.303"></svg:circle><svg:path d="m13.112 19.808l1.499-5.865c.256-1.002 1.376-1.954 2.41-1.954h9.776c1.034 0 2.155.952 2.41 1.954l1.5 5.865"></svg:path><svg:circle cx="29.729" cy="24.37" r="1.303"></svg:circle></svg:g><svg:circle cx="21.909" cy="21.909" r="16.409" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.51 33.51l8.99 8.99"></svg:path>`,
})
export class ArcticonsCarinfoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
