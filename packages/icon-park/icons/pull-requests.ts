import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPullRequestsIcon],svg[icon-park-pull-requests-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M37 44C39.2091 44 41 42.2091 41 40C41 37.7909 39.2091 36 37 36C34.7909 36 33 37.7909 33 40C33 42.2091 34.7909 44 37 44Z"></svg:path><svg:path fill="#2F88FF" d="M11 12C13.2091 12 15 10.2091 15 8C15 5.79086 13.2091 4 11 4C8.79086 4 7 5.79086 7 8C7 10.2091 8.79086 12 11 12Z"></svg:path><svg:path fill="#2F88FF" d="M11 44C13.2091 44 15 42.2091 15 40C15 37.7909 13.2091 36 11 36C8.79086 36 7 37.7909 7 40C7 42.2091 8.79086 44 11 44Z"></svg:path><svg:path stroke-linecap="round" d="M11 12V36"></svg:path><svg:path stroke-linecap="round" d="M24 10H33C35.2091 10 37 11.7909 37 14V36"></svg:path><svg:path stroke-linecap="round" d="M30 16L24 10L30 4"></svg:path></svg:g>`,
})
export class IconParkPullRequestsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
