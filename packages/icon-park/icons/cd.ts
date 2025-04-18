import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCdIcon],svg[icon-park-cd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="24" cy="24" r="18"></svg:circle><svg:path stroke-linecap="round" d="M13 24C13 17.9249 17.9249 13 24 13"></svg:path><svg:circle cx="24" cy="24" r="5" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkCdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
