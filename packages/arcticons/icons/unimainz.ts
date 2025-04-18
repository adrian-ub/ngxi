import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUnimainzIcon],svg[arcticons-unimainz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.51 18.28h5.72m0 0v8.58a2.87 2.87 0 0 1-2.86 2.86h0a2.86 2.86 0 0 1-2.86-2.86v-.95m16.61-3.78a3.83 3.83 0 0 0-4-3.83a4 4 0 0 0-3.64 4.05v3.56a3.84 3.84 0 0 0 3.84 3.84h0a3.84 3.84 0 0 0 3.84-3.84h-3.88m10.53-7.61v7.61a3.84 3.84 0 0 0 3.84 3.84h0a3.84 3.84 0 0 0 3.84-3.84V18.3M28.4 36.36V11.64"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsUnimainzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
