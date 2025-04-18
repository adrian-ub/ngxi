import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsExclamationIcon],svg[majesticons-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M9.378 4.661c1.143-2.057 4.101-2.057 5.245 0l6.6 11.882c1.111 2-.335 4.457-2.622 4.457H5.399c-2.287 0-3.733-2.457-2.622-4.457l6.6-11.882zM12 8a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zm1 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
