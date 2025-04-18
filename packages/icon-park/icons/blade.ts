import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBladeIcon],svg[icon-park-blade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 14V17H6C4.89543 17 4 17.8954 4 19V29C4 30.1046 4.89543 31 6 31H8V34C8 35.1046 8.89543 36 10 36H37C38.1046 36 39 35.1046 39 34V31H42C43.1046 31 44 30.1046 44 29V19C44 17.8954 43.1046 17 42 17H39V14C39 12.8954 38.1046 12 37 12H10C8.89543 12 8 12.8954 8 14Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 24H36"></svg:path><svg:circle cx="24" cy="24" r="4" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 29V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 29V19"></svg:path></svg:g>`,
})
export class IconParkBladeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
