import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsCapacitorIcon],svg[flat-color-icons-capacitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF9800" d="M0 27h25v4H0zm0-10h25v4H0z"></svg:path><svg:path fill="#3F51B5" d="M46 35c1.1 0 2-.9 2-2V15c0-1.1-.9-2-2-2H27v22zM21 13c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h2V13z"></svg:path><svg:path fill="#303F9F" d="M25 33c1.1 0 2 .9 2 2V13c0 1.1-.9 2-2 2s-2-.9-2-2v22c0-1.1.9-2 2-2"></svg:path>`,
})
export class FlatColorIconsCapacitorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
