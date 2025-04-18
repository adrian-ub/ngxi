import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsCheckboxListDetailIcon],svg[majesticons-checkbox-list-detail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 5h10M11 9h5"></svg:path><svg:rect width="4" height="4" x="3" y="5" fill="currentColor" rx="1"></svg:rect><svg:path d="M11 15h10m-10 4h5"></svg:path><svg:rect width="4" height="4" x="3" y="15" fill="currentColor" rx="1"></svg:rect></svg:g>`,
})
export class MajesticonsCheckboxListDetailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
