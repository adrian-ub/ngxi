import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidHealthIcon],svg[icon-park-solid-health-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSHealth0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"></svg:path><svg:path fill="#000" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M27.3 12c-1.823 0-3.3 1.435-3.3 3.204c0 3.205 3.9 6.118 6 6.796c2.1-.678 6-3.59 6-6.796C36 13.435 34.523 12 32.7 12a3.33 3.33 0 0 0-2.7 1.362A3.33 3.33 0 0 0 27.3 12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSHealth0)"></svg:path>`,
})
export class IconParkSolidHealthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
