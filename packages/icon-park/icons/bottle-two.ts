import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBottleTwoIcon],svg[icon-park-bottle-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M15 21.5597C15 18.1105 16.8097 14.9142 19.7674 13.1395C19.9117 13.053 20 12.897 20 12.7288V4H28V12.7288C28 12.897 28.0883 13.053 28.2326 13.1395C31.1903 14.9142 33 18.1105 33 21.5597V42C33 43.1046 32.1046 44 31 44H17C15.8954 44 15 43.1046 15 42V21.5597Z"></svg:path><svg:path stroke="#fff" d="M20 10L28 10"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M33 23H24V38H33"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M33 40V21"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M20 12V8"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M28 12V8"></svg:path></svg:g>`,
})
export class IconParkBottleTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
