import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTrunkIcon],svg[icon-park-outline-trunk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="24" height="28" x="12" y="12" rx="4"></svg:rect><svg:path d="M20 12V6m8 6V6M16 4h16M18 40v4m12-4v4M20 25h8"></svg:path></svg:g>`,
})
export class IconParkOutlineTrunkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
