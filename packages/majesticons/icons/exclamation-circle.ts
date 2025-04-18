import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsExclamationCircleIcon],svg[majesticons-exclamation-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm10-5a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm1 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsExclamationCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
