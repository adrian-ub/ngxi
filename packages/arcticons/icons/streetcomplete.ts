import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStreetcompleteIcon],svg[arcticons-streetcomplete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.28 5.5h5.44v4.59h4.16v9.17h-4.16v3.3h11l4.59 4.59l-4.59 4.59h-11V44.5h-5.44V31.74h-4.16v-9.18h4.16v-3.3h-11l-4.63-4.58l4.59-4.59h11Zm0 4.59h5.44m0 9.17h-5.44m0 3.3h5.44m.25 9.18h-5.69"></svg:path>`,
})
export class ArcticonsStreetcompleteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
