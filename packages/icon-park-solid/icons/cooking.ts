import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCookingIcon],svg[icon-park-solid-cooking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSCooking0"><svg:g fill="none" stroke-width="4"><svg:path stroke="#fff" stroke-linecap="round" d="M6 42h36M6 36h36"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M9 25c0-8.284 6.716-15 15-15s15 6.716 15 15v11H9z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M17 25v4"></svg:path><svg:path stroke="#fff" d="M28 10V8a4 4 0 0 0-8 0v2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCooking0)"></svg:path>`,
})
export class IconParkSolidCookingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
