import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSailboatOneIcon],svg[icon-park-sailboat-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M21 31V5L7 31H21Z"></svg:path><svg:path fill="#2F88FF" d="M27 31V13L41 31H27Z"></svg:path><svg:path d="M5 37H43L38 43H10L5 37Z"></svg:path></svg:g>`,
})
export class IconParkSailboatOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
