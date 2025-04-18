import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkIdCardHIcon],svg[icon-park-id-card-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="32" x="4" y="8" rx="2"></svg:rect><svg:path fill="#2F88FF" d="M17 25C19.2091 25 21 23.2091 21 21C21 18.7909 19.2091 17 17 17C14.7909 17 13 18.7909 13 21C13 23.2091 14.7909 25 17 25Z"></svg:path><svg:path stroke-linecap="round" d="M23 31C23 27.6863 20.3137 25 17 25C13.6863 25 11 27.6863 11 31"></svg:path><svg:path stroke-linecap="round" d="M28 20H36"></svg:path><svg:path stroke-linecap="round" d="M30 28H36"></svg:path></svg:g>`,
})
export class IconParkIdCardHIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
