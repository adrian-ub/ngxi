import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHomeOfficeLineIcon],svg[ri-home-office-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.673 1.612L20.8 9h-2.973L12 3.703L6 9.158V19h5v2H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0M14 11h9v7h-9zm2 2v3h5v-3zm8 8H13v-2h11z"></svg:path>`,
})
export class RiHomeOfficeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
