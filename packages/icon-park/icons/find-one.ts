import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFindOneIcon],svg[icon-park-find-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M23.8 14C29.4333 14 34 18.4772 34 24C34 29.5228 29.4333 34 23.8 34C21.1876 34 18.8046 33.0372 17 31.4537"></svg:path><svg:path d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C18.5856 44 13.6737 41.8485 10.0726 38.3537C6.32733 34.719 4 29.6313 4 24C4 18.6326 6.11433 13.759 9.55556 10.1667"></svg:path><svg:path d="M9.55566 10.167L24.0001 24.0003L10.0727 38.3539"></svg:path></svg:g>`,
})
export class IconParkFindOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
