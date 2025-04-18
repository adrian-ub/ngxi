import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIetisalatIcon],svg[arcticons-ietisalat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.261 7.117c0 1.445-1.253 2.617-2.798 2.617h0c-1.545 0-2.798-1.172-2.798-2.617h0c0-1.445 1.253-2.617 2.798-2.617h0c1.545 0 2.798 1.172 2.798 2.617M15.679 43.5c7.893-5.301 15.918-12.717 13.93-26.194c-.46-3.118-4.63-4.216-6.231 0c-1.558 4.099-2.286 17.109 2.413 23.29c1.717 2.259 4.75 1.728 6.53-.615"></svg:path>`,
})
export class ArcticonsIetisalatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
