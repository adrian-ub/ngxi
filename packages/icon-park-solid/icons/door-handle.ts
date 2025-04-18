import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidDoorHandleIcon],svg[icon-park-solid-door-handle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="26" height="40" x="6" y="4" rx="2"></svg:rect><svg:path d="M14 34h10"></svg:path><svg:path fill="currentColor" d="M42 20v-6H23a5 5 0 1 0 0 6z"></svg:path></svg:g>`,
})
export class IconParkSolidDoorHandleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
