import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobileManagerIcon],svg[arcticons-mobile-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5c1.704 0 15.24-7.82 15.24-16.943V6.505C35.228 6.505 24 4.5 24 4.5S12.671 6.505 8.76 6.505v20.052C8.76 35.68 22.297 43.5 24 43.5"></svg:path><svg:circle cx="24" cy="33.675" r="2.707" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.702 30.968l3.108-11.129m-13.735 1.504c0-5.514 4.41-9.925 9.925-9.925s9.925 4.411 9.925 9.925M24 11.518v2.406m-9.925 7.419h2.406m17.444 0h-2.406"></svg:path><svg:circle cx="24" cy="33.675" r="2.707" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMobileManagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
