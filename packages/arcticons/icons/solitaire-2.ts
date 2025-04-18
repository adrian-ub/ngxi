import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSolitaire2Icon],svg[arcticons-solitaire-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.177 24h5.786m-2.893-2.892v5.784M10.5 18.215h8.677m-4.338 11.57v-11.57m-4.339 0v1.999m8.677-1.999v1.999m-6.812 9.571h4.947m16.825-3.833h-5.803m-1.438 3.833l4.339-11.57l4.339 11.57m-10.634 0h4.339m-.213-11.57h4.338m-.243 11.57H37.5"></svg:path>`,
})
export class ArcticonsSolitaire2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
