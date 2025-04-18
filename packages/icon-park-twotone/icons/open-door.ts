import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneOpenDoorIcon],svg[icon-park-twotone-open-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTOpenDoor0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M20 4v40l22-6V10z"></svg:path><svg:path stroke-linecap="round" d="M6 10h14v28H6z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M28 22v4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTOpenDoor0)"></svg:path>`,
})
export class IconParkTwotoneOpenDoorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
