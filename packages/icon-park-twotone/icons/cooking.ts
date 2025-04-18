import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCookingIcon],svg[icon-park-twotone-cooking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCooking0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" d="M6 42h36M6 36h36"></svg:path><svg:path fill="#555" stroke-linecap="round" stroke-linejoin="round" d="M9 25c0-8.284 6.716-15 15-15s15 6.716 15 15v11H9z"></svg:path><svg:path stroke-linecap="round" d="M17 25v4"></svg:path><svg:path d="M28 10V8a4 4 0 0 0-8 0v2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCooking0)"></svg:path>`,
})
export class IconParkTwotoneCookingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
