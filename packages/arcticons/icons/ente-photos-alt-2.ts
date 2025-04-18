import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEntePhotosAlt2Icon],svg[arcticons-ente-photos-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.756 25.867c-.345.69-1.15 1.15-1.956 1.15h0a2.307 2.307 0 0 1-2.3-2.3V23.22c0-1.265 1.035-2.3 2.3-2.3h0c1.266 0 2.3 1.035 2.3 2.3v.805h-4.6m22.655 1.85c-.345.69-1.15 1.15-1.955 1.15h0a2.307 2.307 0 0 1-2.3-2.3V23.23c0-1.266 1.034-2.3 2.3-2.3h0c1.265 0 2.3 1.034 2.3 2.3v.805h-4.6M24 27.021v-3.795c0-1.266-1.035-2.3-2.3-2.3h0a2.307 2.307 0 0 0-2.3 2.3v3.795m-.001-3.795v-2.301"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.564 18.974v8.052m-1.265-6.096h2.415M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsEntePhotosAlt2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
