import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAtomStoreIcon],svg[arcticons-atom-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 5.5l-9.25 9.25L24 24l-9.25 9.25L24 42.5L42.5 24z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.75 5.5L5.5 14.75L14.75 24L5.5 33.25l9.25 9.25L33.25 24zm0 18.5l4.625 4.625"></svg:path>`,
})
export class ArcticonsAtomStoreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
