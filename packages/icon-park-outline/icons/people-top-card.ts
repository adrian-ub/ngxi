import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePeopleTopCardIcon],svg[icon-park-outline-people-top-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 8H4v30h15l5 5l5-5h15z"></svg:path><svg:circle cx="24" cy="19" r="5"></svg:circle><svg:path d="M33 32c0-4.418-4.03-8-9-8s-9 3.582-9 8"></svg:path></svg:g>`,
})
export class IconParkOutlinePeopleTopCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
