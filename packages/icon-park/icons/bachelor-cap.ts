import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBachelorCapIcon],svg[icon-park-bachelor-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 13L24 8L44 13L24 18L4 13Z"></svg:path><svg:path d="M13 16V25.9706C13 25.9706 18 29 24 29C30 29 35 25.9706 35 25.9706V16"></svg:path><svg:path d="M7 14V36"></svg:path><svg:rect width="6" height="6" x="4" y="34" fill="#2F88FF"></svg:rect></svg:g>`,
})
export class IconParkBachelorCapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
