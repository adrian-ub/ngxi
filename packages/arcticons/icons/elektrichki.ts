import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsElektrichkiIcon],svg[arcticons-elektrichki-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.456 7.879h21.089a2.48 2.48 0 0 1 2.482 2.473V34.57a2.48 2.48 0 0 1-2.472 2.484h-21.1a2.48 2.48 0 0 1-2.482-2.474V10.363a2.48 2.48 0 0 1 2.471-2.484Zm2.615 32.401H31.93M14.27 43.5l3.604-6.447m12.25 0l3.604 6.447"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.01 7.879h19.979v15.464H14.01z"></svg:path><svg:circle cx="16.071" cy="32.462" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.929" cy="32.462" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.521 4.5H31.48m-4.118 0v3.379M20.638 4.5v3.379"></svg:path>`,
})
export class ArcticonsElektrichkiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
