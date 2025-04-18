import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZohomailIcon],svg[arcticons-zohomail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 31.25v9.5a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-20.5l-18-15h-1l-18 15v6l18 9.54h1l11-5.92v-7.62a1.11 1.11 0 0 0-1-1h-21a1.12 1.12 0 0 0-1 1c-.05.5 0 2.92 0 2.92"></svg:path>`,
})
export class ArcticonsZohomailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
