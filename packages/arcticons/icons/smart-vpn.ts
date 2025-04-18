import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSmartVpnIcon],svg[arcticons-smart-vpn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.258 29.472h12.003v8.909H10.258zm2.038-3.474a4.031 4.031 0 0 1 8.059 0m0 .046v3.422m-8.06-3.41v3.375m-9.022-.094c2.948-2.2 4.74-1.892 6.985.135m10.097-.006c6.992-7.863 14.506-12.901 23.593-12.739"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.347 27.75c4.378-8.676 12.49-15.408 22.06-14.68M3.851 31.387c2.948-2.2 4.161-1.874 6.406.153"></svg:path>`,
})
export class ArcticonsSmartVpnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
