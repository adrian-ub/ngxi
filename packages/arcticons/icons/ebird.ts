import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEbirdIcon],svg[arcticons-ebird-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.545 24.9c0-1.421 1.139-2.573 2.543-2.573m-2.543 0v6.82"></svg:path><svg:circle cx="26.098" cy="19.175" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.132 27.848a2.54 2.54 0 0 1-2.21 1.299c-1.404 0-2.543-1.152-2.543-2.574v-1.672c0-1.422 1.139-2.574 2.543-2.574s2.543 1.152 2.543 2.574v.836H9.38m29.24-.837c0-1.421-1.138-2.573-2.543-2.573s-2.543 1.152-2.543 2.573v1.673c0 1.421 1.139 2.573 2.543 2.573s2.543-1.152 2.543-2.573m0 2.574V18.853M21.108 24c1.405 0 2.543 1.152 2.543 2.573s-1.139 2.574-2.543 2.574h-4.196V18.853h4.196c1.404 0 2.543 1.152 2.543 2.573S22.512 24 21.108 24m0 0h-4.191m9.181-1.673v6.82"></svg:path>`,
})
export class ArcticonsEbirdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
