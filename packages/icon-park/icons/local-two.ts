import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLocalTwoIcon],svg[icon-park-local-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C24 44 39 32 39 19C39 10.7157 32.2843 4 24 4C15.7157 4 9 10.7157 9 19C9 32 24 44 24 44Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 25C27.3137 25 30 22.3137 30 19C30 15.6863 27.3137 13 24 13C20.6863 13 18 15.6863 18 19C18 22.3137 20.6863 25 24 25Z"></svg:path></svg:g>`,
})
export class IconParkLocalTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
