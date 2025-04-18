import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneSickbedIcon],svg[icon-park-twotone-sickbed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTSickbed0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m4 23l36 12"></svg:path><svg:circle cx="12" cy="16" r="3" fill="#555"></svg:circle><svg:path fill="#555" stroke-linejoin="round" d="M29 36v-4.5L19 28v8z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 27.5L23 14l18.374 7a3 3 0 0 1 1.8 3.686L40 35"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSickbed0)"></svg:path>`,
})
export class IconParkTwotoneSickbedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
