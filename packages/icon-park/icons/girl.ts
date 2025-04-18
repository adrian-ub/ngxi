import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGirlIcon],svg[icon-park-girl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="10" r="6" fill="#2F88FF"></svg:circle><svg:path fill="#2F88FF" d="M27.2308 16H20.7692L10 36H38L27.2308 16Z"></svg:path><svg:path d="M27 36V44"></svg:path><svg:path d="M21 36V44"></svg:path></svg:g>`,
})
export class IconParkGirlIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
