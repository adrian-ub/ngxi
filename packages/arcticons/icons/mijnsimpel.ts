import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMijnsimpelIcon],svg[arcticons-mijnsimpel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.29 23.585a1.95 1.95 0 0 1 1.95-1.95h0a1.95 1.95 0 0 1 1.95 1.95v3.22m-3.901-5.171v5.17"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.19 23.585a1.95 1.95 0 0 1 1.952-1.95h0a1.95 1.95 0 0 1 1.95 1.95v3.22"></svg:path><svg:circle cx="14.107" cy="19.245" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.107 21.634v5.17m-5.484-.436c.356.3.74.436 1.604.436h.438c.712 0 1.29-.578 1.29-1.292h0c0-.714-.578-1.293-1.29-1.293H9.79a1.29 1.29 0 0 1-1.29-1.292h0c0-.714.577-1.293 1.29-1.293h.437c.864 0 1.249.137 1.605.437M38.232 19v6.829c0 .539.437.975.975.975h.293m-3.603-.984a1.95 1.95 0 0 1-1.695.984h0a1.95 1.95 0 0 1-1.95-1.95v-1.269a1.95 1.95 0 0 1 1.95-1.95h0a1.95 1.95 0 0 1 1.951 1.95v.634h-3.902m-5.981.635a1.95 1.95 0 0 0 1.952 1.95h0a1.95 1.95 0 0 0 1.95-1.95v-1.269a1.95 1.95 0 0 0-1.95-1.95h0a1.95 1.95 0 0 0-1.951 1.95m0-1.951v7.804"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsMijnsimpelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
