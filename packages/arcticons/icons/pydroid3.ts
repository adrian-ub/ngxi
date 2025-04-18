import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPydroid3Icon],svg[arcticons-pydroid3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34 5v5a4.5 4.5 0 0 0 4 4h5M11.5 29.5v-16h5.2a5.4 5.4 0 1 1 0 10.8h-5.2m16.7 5.2L24 18.9m8 0l-5 14.4a2.34 2.34 0 0 1-2.2 1.6h-.6m7.3-4.7a3.4 3.4 0 0 1 2.5-.7h.8m0 8a2.006 2.006 0 0 0 2-2h0a2.006 2.006 0 0 0-2-2h0a2.006 2.006 0 0 0 2-2h0a2.006 2.006 0 0 0-2-2m-3.3 7.4a3.25 3.25 0 0 0 2.5.7h.8"></svg:path>`,
})
export class ArcticonsPydroid3Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
