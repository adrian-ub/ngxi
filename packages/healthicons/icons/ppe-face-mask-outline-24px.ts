import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeFaceMaskOutline24pxIcon],svg[healthicons-ppe-face-mask-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15 10v1.5H9V10zm0 4.5V13H9v1.5z"></svg:path><svg:path fill-rule="evenodd" d="m12 6l7 2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-.042a2 2 0 0 1-1.285 1.474l-.628.224a15 15 0 0 1-10.09 0l-.628-.224A2 2 0 0 1 5.042 16H5a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3zm-7 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1zm14 4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm-2-4.491L12 8.08L7 9.509v6.082l.628.224a13 13 0 0 0 8.744 0L17 15.59z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPpeFaceMaskOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
