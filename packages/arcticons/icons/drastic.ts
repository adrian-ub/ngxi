import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDrasticIcon],svg[arcticons-drastic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="18.722" height="11.25" x="14.651" y="9.155" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.766"></svg:rect><svg:rect width="28.515" height="16.888" x="9.755" y="5.918" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.766"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.012 25.793H11.418A2.606 2.606 0 0 0 8.9 27.725L5.565 40.173a1.534 1.534 0 0 0 1.482 1.932h16.965"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.012 28.683h-8.296a1.22 1.22 0 0 0-1.197.98l-1.604 7.986a.82.82 0 0 0 .803.98h10.294"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.012 25.793h12.594a2.606 2.606 0 0 1 2.518 1.932l3.335 12.448a1.534 1.534 0 0 1-1.482 1.932H24.012"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.012 28.683h8.296a1.22 1.22 0 0 1 1.197.98l1.604 7.986a.82.82 0 0 1-.803.98H24.012"></svg:path>`,
})
export class ArcticonsDrasticIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
