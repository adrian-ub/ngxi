import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLibrespeedIcon],svg[arcticons-librespeed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.9 30.5c-.2-.5-.4-.9-.6-1.4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="2.99 2.99" stroke-linecap="round" stroke-linejoin="round" d="M9.5 26.3A14.62 14.62 0 1 1 38 28"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.6 29.4c-.2.5-.4.9-.6 1.4M25.9 24L24 12.2L22.2 24a1.8 1.8 0 0 0 .9 1.6a2.12 2.12 0 0 0 1.9 0a1.89 1.89 0 0 0 .9-1.6m-7.7 9.9h.6v.6h-.6zm3.7 0h.6v.6h-.6zm3.6 0h.6v.6h-.6zm3.7 0h.6v.6h-.6z"></svg:path>`,
})
export class ArcticonsLibrespeedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
