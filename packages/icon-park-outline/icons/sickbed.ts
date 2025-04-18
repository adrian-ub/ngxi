import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSickbedIcon],svg[icon-park-outline-sickbed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m4 23l36 12"></svg:path><svg:circle cx="12" cy="16" r="3"></svg:circle><svg:path stroke-linejoin="round" d="M29 36v-4.5L19 28v8z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 27.5L23 14l18.374 7a3 3 0 0 1 1.8 3.686L40 35"></svg:path></svg:g>`,
})
export class IconParkOutlineSickbedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
