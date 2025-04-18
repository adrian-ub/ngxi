import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKpnThuisIcon],svg[arcticons-kpn-thuis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.063 17.43L25.723 5.172a2.55 2.55 0 0 0-3.447 0L8.936 17.43a2 2 0 0 0-.646 1.473V41.5a2 2 0 0 0 2 2h27.42a2 2 0 0 0 2-2V18.903a2 2 0 0 0-.646-1.473Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.776 30.894a4.314 4.314 0 0 0-5.512-.015v.015m2.745 1.766a1.73 1.73 0 1 0 1.73 1.73h0a1.73 1.73 0 0 0-1.73-1.73m5.398-4.757a8.48 8.48 0 0 0-10.796 0M32 24.764a12.54 12.54 0 0 0-16 0"></svg:path>`,
})
export class ArcticonsKpnThuisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
