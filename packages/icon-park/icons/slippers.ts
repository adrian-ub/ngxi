import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSlippersIcon],svg[icon-park-slippers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 29L44 29V35H4L4 29Z"></svg:path><svg:path fill="#2F88FF" d="M23.5293 13C20.0293 17 20.0292 25 20.0293 29H40.0293V20.5C40.0293 20.5 28.0001 15 23.5293 13Z"></svg:path></svg:g>`,
})
export class IconParkSlippersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
