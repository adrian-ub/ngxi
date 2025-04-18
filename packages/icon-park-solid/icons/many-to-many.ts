import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidManyToManyIcon],svg[icon-park-solid-many-to-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSManyToMany0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M42 7H6a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M30 30V18l8 12V18M10 30V18l8 12V18"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 20v1m0 6v1"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSManyToMany0)"></svg:path>`,
})
export class IconParkSolidManyToManyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
