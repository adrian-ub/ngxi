import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTractiveGpsIcon],svg[arcticons-tractive-gps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="21.31" r="10.871" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.81 21.31C40.81 12.026 33.284 4.5 24 4.5S7.19 12.026 7.19 21.31c0 5.268 2.426 9.966 6.218 13.048L24 43.5l10.592-9.142c3.792-3.082 6.218-7.78 6.218-13.048"></svg:path><svg:ellipse cx="21.901" cy="16.452" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.21" ry="1.715" transform="rotate(-21.333 21.901 16.452)"></svg:ellipse><svg:ellipse cx="18.851" cy="19.629" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.21" ry="1.715" transform="rotate(-33.445 18.851 19.63)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 19.63c1.443 0 1.777 1.859 3.158 3.177c.885.844 2.244 1.286 2.244 2.698c0 1.588-1.16 2.32-2.169 2.32s-1.675-.858-3.233-.858s-2.225.858-3.233.858s-2.169-.732-2.169-2.32c0-1.412 1.36-1.854 2.244-2.698c1.381-1.318 1.715-3.178 3.158-3.178"></svg:path><svg:ellipse cx="26.099" cy="16.452" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.715" ry="1.21" transform="rotate(-68.667 26.098 16.452)"></svg:ellipse><svg:ellipse cx="29.149" cy="19.629" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.715" ry="1.21" transform="rotate(-56.555 29.149 19.63)"></svg:ellipse>`,
})
export class ArcticonsTractiveGpsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
