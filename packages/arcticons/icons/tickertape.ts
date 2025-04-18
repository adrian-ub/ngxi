import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTickertapeIcon],svg[arcticons-tickertape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="5.606" height="3.441" x="5.5" y="22.279" rx=".781" ry=".781"></svg:rect><svg:path d="m18.283 27.911l-4.516-7.822H22.8zm8.873-7.947l-4.516 7.822h9.033z"></svg:path><svg:path d="M9.5 5.5a4 4 0 0 0-4 4v7.295h27.502c.771 0 1.396.625 1.396 1.396V29.81c0 .77-.625 1.396-1.396 1.396H5.5V38.5a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4z"></svg:path></svg:g>`,
})
export class ArcticonsTickertapeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
