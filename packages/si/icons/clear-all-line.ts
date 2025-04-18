import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siClearAllLineIcon],svg[si-clear-all-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 12h12M4 16h12M8 8h12"></svg:path>`,
})
export class SiClearAllLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
