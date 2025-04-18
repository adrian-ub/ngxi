import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPhotoProIcon],svg[arcticons-photo-pro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.867 14.701v-3.196h-7.581V14.7"></svg:path><svg:circle cx="26.956" cy="25.924" r="12.7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.663 37.876H6.775a2.26 2.26 0 0 1-2.26-2.26h0V13.971h18.148m8.586 0h12.266v21.645a2.26 2.26 0 0 1-2.26 2.26H31.249m11.466-23.905v-3.493h-8.284v3.493m-.001 0v-3.16L31.943 6.5H21.97l-2.489 4.31v3.161"></svg:path><svg:circle cx="26.956" cy="25.927" r="6.572" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="26.956" cy="25.927" r="10.173" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.43 11.417H19.482"></svg:path>`,
})
export class ArcticonsPhotoProIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
