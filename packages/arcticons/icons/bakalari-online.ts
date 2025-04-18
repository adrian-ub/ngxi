import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBakalariOnlineIcon],svg[arcticons-bakalari-online-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.932 3.5L6.186 13.682v20.431L23.863 44.5l17.883-10.523l.068-20.158z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.069 8.898l-13.156 7.449V31.38l12.95 7.653l13.292-7.722l-.137-5.261l-8.496-4.852l8.496-4.783z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.177 19.14l-8.314-4.843l-8.29 4.783l-.206 9.567L24 33.567l13.018-7.517"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.522 21.198v5.365l3.79 2.204m4.706-12.352l.137 5.364l-3.768 2.153"></svg:path>`,
})
export class ArcticonsBakalariOnlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
