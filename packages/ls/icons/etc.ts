import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsEtcIcon],svg[ls-etc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 347c0-48-40-88-88-88c-49 0-88 40-88 88s39 88 88 88c48 0 88-40 88-88m270 0c0-48-40-88-88-88s-88 40-88 88s40 88 88 88s88-40 88-88m271 0c0-48-39-88-88-88c-48 0-88 40-88 88s40 88 88 88c49 0 88-40 88-88"></svg:path>`,
})
export class LsEtcIcon {
  readonly viewBox = input("0 0 717 614")
  readonly width = input("1.17em")
  readonly height = input("1em")
}
