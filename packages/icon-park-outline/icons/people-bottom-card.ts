import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePeopleBottomCardIcon],svg[icon-park-outline-people-bottom-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 39H4V9h15l5-5l5 5h15z"></svg:path><svg:circle cx="24" cy="20" r="5"></svg:circle><svg:path d="M33 33c0-4.418-4.03-8-9-8s-9 3.582-9 8"></svg:path></svg:g>`,
})
export class IconParkOutlinePeopleBottomCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
