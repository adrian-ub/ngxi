import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPeopleBottomCardIcon],svg[icon-park-people-bottom-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 39H4V9H19L24 4L29 9H44V39Z"></svg:path><svg:circle cx="24" cy="20" r="5" fill="#2F88FF"></svg:circle><svg:path d="M33 33C33 28.5817 28.9706 25 24 25C19.0294 25 15 28.5817 15 33"></svg:path></svg:g>`,
})
export class IconParkPeopleBottomCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
