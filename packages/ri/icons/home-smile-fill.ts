import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHomeSmileFillIcon],svg[ri-home-smile-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3zM7.5 13a4.5 4.5 0 1 0 9 0h-2a2.5 2.5 0 0 1-5 0z"></svg:path>`,
})
export class RiHomeSmileFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
