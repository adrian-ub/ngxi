import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidClearIcon],svg[icon-park-solid-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSClear0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" stroke-linecap="round" d="M20 5.914h8v8h15v8H5v-8h15z" clip-rule="evenodd"></svg:path><svg:path fill="#fff" stroke="#fff" d="M8 40h32V22H8z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M16 39.898v-5.984m8 5.984v-6m8 6v-5.984"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 40h24"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSClear0)"></svg:path>`,
})
export class IconParkSolidClearIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
