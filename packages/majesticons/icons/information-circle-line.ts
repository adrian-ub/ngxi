import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsInformationCircleLineIcon],svg[majesticons-information-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm10 5a1 1 0 0 0 1-1v-4a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1zm0-10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12z"></svg:path></svg:g>`,
})
export class MajesticonsInformationCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
