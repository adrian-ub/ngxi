import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHomeOfficeFillIcon],svg[ri-home-office-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.8 9H12v8h-1v4H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0zM14 11h9v7h-9zm-1 10h11v-2H13z"></svg:path>`,
})
export class RiHomeOfficeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
