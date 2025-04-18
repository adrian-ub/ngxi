import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUmoneyIcon],svg[arcticons-umoney-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.795 22.571c.45-2.426 2.392-4.392 4.346-4.392h0c1.947 0 3.164 1.966 2.714 4.392l-1.346 7.25m-12.774-7.25c.453-2.426 2.396-4.392 4.346-4.392h0c1.947 0 3.164 1.966 2.714 4.392l-1.342 7.25M14.491 18.18l-1.346 7.249c-.45 2.422.767 4.391 2.718 4.391h0c1.95 0 3.893-1.965 4.346-4.391l1.342-7.25"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsUmoneyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
