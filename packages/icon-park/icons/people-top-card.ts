import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPeopleTopCardIcon],svg[icon-park-people-top-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 8H4V38H19L24 43L29 38H44V8Z"></svg:path><svg:circle cx="24" cy="19" r="5" fill="#2F88FF"></svg:circle><svg:path d="M33 32C33 27.5817 28.9706 24 24 24C19.0294 24 15 27.5817 15 32"></svg:path></svg:g>`,
})
export class IconParkPeopleTopCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
