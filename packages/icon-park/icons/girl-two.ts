import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGirlTwoIcon],svg[icon-park-girl-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="10" r="6" fill="#2F88FF"></svg:circle><svg:path d="M28 44V36H38L27.2308 16H20.7692L10 36H20V44"></svg:path></svg:g>`,
})
export class IconParkGirlTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
