import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSlaveIcon],svg[icon-park-slave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 38V30.5M10 38V6C10 4.89543 10.8954 4 12 4H36C37.1046 4 38 4.89543 38 6V7"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M25 13H24C20.6863 13 18 15.6863 18 19V19C18 22.3137 20.6863 25 24 25H25"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 13H34C37.3137 13 40 15.6863 40 19V19C40 22.3137 37.3137 25 34 25H33"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M25 19H33"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 38C10 34.6863 12.6863 32 16 32H32C35.3137 32 38 34.6863 38 38C38 41.3137 35.3137 44 32 44H16C12.6863 44 10 41.3137 10 38Z"></svg:path><svg:circle cx="32" cy="38" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkSlaveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
