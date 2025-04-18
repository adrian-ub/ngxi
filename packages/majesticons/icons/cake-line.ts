import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsCakeLineIcon],svg[majesticons-cake-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 9a4 4 0 0 0-4 4v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a4 4 0 0 0-4-4v0M7 9h10M7 9V6m10 3V6m-5 0v3m0-6h.01M7 3h.01M17 3h.01"></svg:path><svg:path d="M3 13c0 1 .6 3 3 3s3-2 3-3c0 1 .6 3 3 3s3-2 3-3c0 1 .6 3 3 3s3-2 3-3"></svg:path></svg:g>`,
})
export class MajesticonsCakeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
