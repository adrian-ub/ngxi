import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeFaceMask24pxIcon],svg[healthicons-ppe-face-mask-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="m5 8l7-2l7 2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-.042a2 2 0 0 1-1.285 1.474l-.628.224a15 15 0 0 1-10.09 0l-.628-.224A2 2 0 0 1 5.042 16H5a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1zm14 4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zM9 10v1.5h6V10zm0 3.5V15h6v-1.5z"></svg:path><svg:path d="m19 8l-7-2l-7 2a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h.042a2 2 0 0 0 1.285 1.474l.628.224a15 15 0 0 0 10.09 0l.628-.224A2 2 0 0 0 18.958 16H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3m1 3a1 1 0 0 0-1-1v4a1 1 0 0 0 1-1zM4 13a1 1 0 0 0 1 1v-4a1 1 0 0 0-1 1zm11-3H9v1.5h6zm-6 5v-1.5h6V15z"></svg:path></svg:g>`,
})
export class HealthiconsPpeFaceMask24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
