import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidElevatorIcon],svg[icon-park-solid-elevator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSElevator0"><svg:g fill="none"><svg:path fill="#fff" d="M42 41V7H6v34z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42 7v34m0-34H4h2v34M42 7h2m-2 34h2m-2 0H6m0 0H4M24 7v34"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 20v8m-3-5l3-3l3 3m-21 5v-8m-3 5l3 3l3-3"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSElevator0)"></svg:path>`,
})
export class IconParkSolidElevatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
