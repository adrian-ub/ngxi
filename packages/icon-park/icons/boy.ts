import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBoyIcon],svg[icon-park-boy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="10" r="6" fill="#2F88FF"></svg:circle><svg:path fill="#2F88FF" d="M30 36H18L10 16H38L30 36Z"></svg:path><svg:path d="M27 36V44"></svg:path><svg:path d="M21 36V44"></svg:path></svg:g>`,
})
export class IconParkBoyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
