import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDroidvimIcon],svg[arcticons-droidvim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="5.8" d="M12.4 6.9c.6-3.3 22.1-3.2 23.2 0v34.4c-1.7 2.9-21.9 3-23.2 0Zm0 1.3h23.2m0 31.4H12.4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.3 6.5h3.6"></svg:path><svg:path fill="none" stroke="currentColor" d="M12.5 35.4h22.7"></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="0 2" stroke-linecap="round" stroke-linejoin="round" d="M14.6 37.5h14"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.4 15.7l-2.7 8l-2.6-8m9.6 4.8a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3.2m-4-5.2v5.2m4-3.2a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3.2"></svg:path><svg:circle cx="22.5" cy="16" r=".8" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.5 18.4v5.3"></svg:path>`,
})
export class ArcticonsDroidvimIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
