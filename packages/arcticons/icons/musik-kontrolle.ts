import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMusikKontrolleIcon],svg[arcticons-musik-kontrolle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="16.255" height="28.134" x="12.03" y="13.456" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.501" transform="rotate(45 20.158 27.522)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.063 26.299l7.958 7.957"></svg:path><svg:circle cx="20.823" cy="25.622" r="1.876" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.149 26.948l4.983-4.983v3.861m-12.338 5.931l1.769 1.768l-1.769 1.768l-1.768-1.768zm1.718 5.253l2.261.494l-.493-2.262m-5.202-5.202l-2.262-.494l.493 2.262m26.178-12.351a8.624 8.624 0 0 0-8.624-8.624M42.5 19.457A13.637 13.637 0 0 0 28.863 5.82"></svg:path>`,
})
export class ArcticonsMusikKontrolleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
