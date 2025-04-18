import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLoveAndHelpIcon],svg[icon-park-love-and-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M15 7C8.92487 7 4 11.9249 4 18C4 29 17 39 24 41.3262C31 39 44 29 44 18C44 11.9249 39.0751 7 33 7C29.2797 7 25.9907 8.8469 24 11.6738C22.0093 8.8469 18.7203 7 15 7Z"></svg:path><svg:path stroke="#fff" d="M18 24H30"></svg:path><svg:path stroke="#fff" d="M24 18V30"></svg:path></svg:g>`,
})
export class IconParkLoveAndHelpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
