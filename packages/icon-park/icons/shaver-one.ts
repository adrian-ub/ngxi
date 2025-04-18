import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkShaverOneIcon],svg[icon-park-shaver-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M36 14H12V6.02055L16.4737 4L20.7193 6.02055L24.193 4L27.6667 6.02055L31.9123 4L36 6.02055V14Z"></svg:path><svg:path d="M12.0001 14C12.0001 14 12 18 12.0001 33C12.0003 48 36.0001 48 36.0001 33C36.0001 18 36.0001 14 36.0001 14"></svg:path><svg:path d="M20 35L28 35"></svg:path><svg:circle cx="24" cy="25" r="4"></svg:circle></svg:g>`,
})
export class IconParkShaverOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
