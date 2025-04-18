import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidProjectorTwoIcon],svg[icon-park-solid-projector-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSProjectorTwo0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M4 12a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M12 19h6m-6 6h4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M14 40v-6m20 6v-6"></svg:path><svg:circle cx="31" cy="22" r="5" fill="#000" stroke="#000"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSProjectorTwo0)"></svg:path>`,
})
export class IconParkSolidProjectorTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
