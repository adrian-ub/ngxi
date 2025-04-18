import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCeMarkingIcon],svg[icon-park-ce-marking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M22 42C12.0589 42 4 33.9411 4 24C4 14.0589 12.0589 6 22 6"></svg:path><svg:path d="M44 42C34.0589 42 26 33.9411 26 24C26 14.0589 34.0589 6 44 6"></svg:path><svg:path d="M26 24H37"></svg:path></svg:g>`,
})
export class IconParkCeMarkingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
