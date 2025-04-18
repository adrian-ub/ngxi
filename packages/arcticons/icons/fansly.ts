import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFanslyIcon],svg[arcticons-fansly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 14.141l13.319 13.32l-12.055 12.054a1.79 1.79 0 0 1-2.53 0L10.68 27.461z"></svg:path><svg:circle cx="24" cy="27.461" r="4.303" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.695 26.67a.804.804 0 0 1-1.196-1.015a1.892 1.892 0 0 0-1.854 3.16a1.894 1.894 0 0 0 3.05-2.145M24 14.142l3.422-3.423a9.418 9.418 0 1 1 13.32 13.32l-.754.753M10.68 27.46l-3.42-3.42a9.418 9.418 0 1 1 13.319-13.32l.753.754"></svg:path>`,
})
export class ArcticonsFanslyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
