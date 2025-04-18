import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDashboardIcon],svg[si-glyph-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.521 15.979c-4.111 0-7.459-3.36-7.459-7.489C1.062 4.359 4.41 1 8.521 1s7.458 3.359 7.458 7.49c0 4.129-3.346 7.489-7.458 7.489M8.512 2.956c-3.052 0-5.534 2.486-5.534 5.545s2.482 5.545 5.534 5.545s5.532-2.487 5.532-5.545c0-3.059-2.482-5.545-5.532-5.545"></svg:path><svg:path d="M8.965 10.062V7.639c0-.347-.213-.626-.477-.626s-.479.279-.479.626v2.423c-.387.192-.968.542-.968 1.438s.819 1.484 1.446 1.484s1.428-.589 1.428-1.484s-.56-1.245-.95-1.438M8 4h.959v.976H8zM5 5h.998v.979H5zm6 0h.998v.979H11z"></svg:path></svg:g>`,
})
export class SiGlyphDashboardIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
