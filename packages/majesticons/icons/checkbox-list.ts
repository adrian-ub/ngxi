import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsCheckboxListIcon],svg[majesticons-checkbox-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 5h10m-10 7h10m-10 7h10"></svg:path><svg:rect width="4" height="4" x="3" y="3" fill="currentColor" rx="1"></svg:rect><svg:rect width="4" height="4" x="3" y="10" fill="currentColor" rx="1"></svg:rect><svg:rect width="4" height="4" x="3" y="17" fill="currentColor" rx="1"></svg:rect></svg:g>`,
})
export class MajesticonsCheckboxListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
