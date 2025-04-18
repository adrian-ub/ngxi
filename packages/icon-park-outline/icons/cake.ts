import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCakeIcon],svg[icon-park-outline-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 12v5M8 27v13a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V27M4 21.97A4.97 4.97 0 0 1 8.97 17h30.06A4.97 4.97 0 0 1 44 21.97v.278a4.56 4.56 0 0 1-2.864 4.231a3.04 3.04 0 0 1-2.544-.132l-.342-.18a3.4 3.4 0 0 0-3.167 0a3.4 3.4 0 0 1-3.166 0a3.4 3.4 0 0 0-3.167 0a3.4 3.4 0 0 1-3.167 0a3.4 3.4 0 0 0-3.166 0a3.4 3.4 0 0 1-3.167 0a3.4 3.4 0 0 0-3.167 0a3.4 3.4 0 0 1-3.166 0a3.4 3.4 0 0 0-3.167 0l-.342.18a3.04 3.04 0 0 1-2.543.132A4.56 4.56 0 0 1 4 22.25z"></svg:path><svg:path d="M27 8c-.8-4-3-4-3-4s-2.2 0-3 4c-1 5 7 5 6 0Z"></svg:path></svg:g>`,
})
export class IconParkOutlineCakeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
