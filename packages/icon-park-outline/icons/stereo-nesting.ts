import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineStereoNestingIcon],svg[icon-park-outline-stereo-nesting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 40L4 33V17l13-7l13 7v12"></svg:path><svg:path d="m30 8l13 7v16l-13 7l-13-7V19"></svg:path></svg:g>`,
})
export class IconParkOutlineStereoNestingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
