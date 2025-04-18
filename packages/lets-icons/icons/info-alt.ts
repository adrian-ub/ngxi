import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsInfoAltIcon],svg[lets-icons-info-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.5 12H12v4h2m-2-8h.01m1.553 12.863a9 9 0 1 0-3.126-17.726a9 9 0 0 0 3.126 17.726"></svg:path>`,
})
export class LetsIconsInfoAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
