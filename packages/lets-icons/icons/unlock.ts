import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsUnlockIcon],svg[lets-icons-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="2" d="M4 13c0-1.885 0-2.828.586-3.414S6.114 9 8 9h8c1.886 0 2.828 0 3.414.586S20 11.115 20 13v2c0 2.829 0 4.243-.879 5.122C18.243 21 16.828 21 14 21h-4c-2.828 0-4.243 0-5.121-.878C4 19.242 4 17.829 4 15z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m16.5 9l.078-.62a5.52 5.52 0 0 0-2.41-5.273v0a5.52 5.52 0 0 0-6.68.416l-.818.709"></svg:path><svg:circle cx="12" cy="15" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsUnlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
