import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDpmIcon],svg[arcticons-dpm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="10.483" height="10.483" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3" ry="3"></svg:rect><svg:rect width="10.483" height="10.483" x="18.759" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3" ry="3"></svg:rect><svg:rect width="10.483" height="10.483" x="32.041" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3" ry="3"></svg:rect><svg:rect width="10.483" height="10.483" x="5.5" y="18.759" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3" ry="3"></svg:rect><svg:rect width="10.483" height="10.483" x="18.759" y="18.759" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3" ry="3"></svg:rect><svg:rect width="10.483" height="10.483" x="32.041" y="18.759" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3" ry="3"></svg:rect><svg:rect width="10.483" height="10.483" x="5.5" y="32.017" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3" ry="3"></svg:rect><svg:rect width="10.483" height="10.483" x="18.759" y="32.017" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3" ry="3"></svg:rect><svg:rect width="10.483" height="10.483" x="32.041" y="32.017" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3" ry="3"></svg:rect>`,
})
export class ArcticonsDpmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
