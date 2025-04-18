import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riShareForwardLineIcon],svg[ri-share-forward-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14h-2a9 9 0 0 0-7.968 4.81A10 10 0 0 1 3 18C3 12.477 7.477 8 13 8V2.5L23.5 11L13 19.5zm-2-2h4v3.308L20.321 11L15 6.692V10h-2a7.98 7.98 0 0 0-6.057 2.774A11 11 0 0 1 11 12"></svg:path>`,
})
export class RiShareForwardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
