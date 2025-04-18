import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoOpIcon],svg[arcticons-co-op-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="7.5" height="9.938" x="26.146" y="12" rx="3.75" ry="3.75"></svg:rect><svg:rect width="7.5" height="9.938" x="14.354" y="25" rx="3.75" ry="3.75"></svg:rect><svg:path d="M21.36 20.049a3.75 3.75 0 0 1-3.256 1.889h0a3.75 3.75 0 0 1-3.75-3.75V15.75a3.75 3.75 0 0 1 3.75-3.75h0c1.39 0 2.605.757 3.252 1.882M26.146 40V28.75a3.75 3.75 0 0 1 3.75-3.75h0a3.75 3.75 0 0 1 3.75 3.75v2.438a3.75 3.75 0 0 1-3.75 3.75H28.33"></svg:path></svg:g>`,
})
export class ArcticonsCoOpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
