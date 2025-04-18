import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsElifeOnIcon],svg[arcticons-elife-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.658 20.8v6.782h3.391m17.958 0V20.8l4.493 6.782V20.8"></svg:path><svg:circle cx="18.647" cy="21.012" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.647 23.089v4.493m-6.978-.856a1.7 1.7 0 0 1-1.474.856h0c-.936 0-1.695-.76-1.695-1.696v-1.102c0-.936.76-1.695 1.696-1.695h0c.936 0 1.695.759 1.695 1.695v.551H8.5m18.306 1.391a1.7 1.7 0 0 1-1.473.856h0c-.937 0-1.696-.76-1.696-1.696v-1.102c0-.936.76-1.695 1.696-1.695h0c.936 0 1.695.759 1.695 1.695v.551h-3.39m-2.386 2.247v-5.595c0-.656.53-1.187 1.186-1.187h0c.585 0 .95.173 1.2.496m-3.392 1.793h2.374"></svg:path><svg:rect width="4.493" height="6.782" x="28.722" y="20.8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.247" ry="2.247"></svg:rect>`,
})
export class ArcticonsElifeOnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
