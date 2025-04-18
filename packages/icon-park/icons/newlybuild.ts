import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkNewlybuildIcon],svg[icon-park-newlybuild-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M19 10V7C19 5.89543 19.8954 5 21 5H41C42.1046 5 43 5.89543 43 7V29C43 30.1046 42.1046 31 41 31H37"></svg:path><svg:rect width="24" height="24" x="5" y="18" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" d="M17 25V35"></svg:path><svg:path stroke="#fff" d="M12 30H22"></svg:path></svg:g>`,
})
export class IconParkNewlybuildIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
