import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGoogleAdminIcon],svg[arcticons-google-admin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.07 5.663H15.93a4.36 4.36 0 0 0-3.776 2.179l-8.07 13.979a4.36 4.36 0 0 0 0 4.359l8.07 13.978a4.36 4.36 0 0 0 3.776 2.18h16.14a4.36 4.36 0 0 0 3.775-2.18l8.071-13.978a4.36 4.36 0 0 0 0-4.36l-8.07-13.978a4.36 4.36 0 0 0-3.776-2.18Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.32 31.785h12.185l6.093 10.552m13.484-28.89L32.989 24l6.093 10.553M7.32 16.215h12.185l6.093-10.553m2.897 10.553h-8.99L15.011 24l4.494 7.785h8.99L32.989 24z"></svg:path>`,
})
export class ArcticonsGoogleAdminIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
