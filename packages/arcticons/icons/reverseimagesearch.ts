import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsReverseimagesearchIcon],svg[arcticons-reverseimagesearch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.075 17.927A16.765 16.765 0 1 1 26.608 38.46m-10.073-.44a16.77 16.77 0 0 1-10.46-11.415"></svg:path><svg:circle cx="22.269" cy="22.382" r="1.734" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="29.785" cy="22.382" r="1.734" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="14.754" cy="22.382" r="1.734" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.972 34.273l7.953 8.227"></svg:path>`,
})
export class ArcticonsReverseimagesearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
