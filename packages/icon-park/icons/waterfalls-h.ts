import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWaterfallsHIcon],svg[icon-park-waterfalls-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 6H6V17H20V6Z"></svg:path><svg:path d="M42 31H28V42H42V31Z"></svg:path><svg:path d="M42 6H28V23H42V6Z"></svg:path><svg:path d="M20 25H6V42H20V25Z"></svg:path></svg:g>`,
})
export class IconParkWaterfallsHIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
