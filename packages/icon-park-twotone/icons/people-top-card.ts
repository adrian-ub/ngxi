import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotonePeopleTopCardIcon],svg[icon-park-twotone-people-top-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTPeopleTopCard0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 8H4v30h15l5 5l5-5h15z"></svg:path><svg:circle cx="24" cy="19" r="5" fill="#555"></svg:circle><svg:path d="M33 32c0-4.418-4.03-8-9-8s-9 3.582-9 8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPeopleTopCard0)"></svg:path>`,
})
export class IconParkTwotonePeopleTopCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
