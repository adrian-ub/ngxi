import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLibrephotosmobileIcon],svg[arcticons-librephotosmobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.864 39.114l14.25-14.25a1.22 1.22 0 0 0 0-1.728h0l-14.25-14.25a1.22 1.22 0 0 0-1.728 0h0l-14.25 14.25a1.22 1.22 0 0 0 0 1.728h0l14.25 14.25a1.22 1.22 0 0 0 1.728 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.864 43.142l14.25-14.25a1.22 1.22 0 0 0 0-1.728h0l-14.25-14.25a1.22 1.22 0 0 0-1.728 0h0l-14.25 14.25a1.22 1.22 0 0 0 0 1.728h0l14.25 14.25a1.22 1.22 0 0 0 1.728 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.864 35.086l14.25-14.25a1.22 1.22 0 0 0 0-1.728h0l-14.25-14.25a1.22 1.22 0 0 0-1.728 0h0l-14.25 14.25a1.22 1.22 0 0 0 0 1.728h0l14.25 14.25a1.22 1.22 0 0 0 1.728 0"></svg:path>`,
})
export class ArcticonsLibrephotosmobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
