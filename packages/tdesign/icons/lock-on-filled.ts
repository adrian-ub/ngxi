import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLockOnFilledIcon],svg[tdesign-lock-on-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10H3.5v12h17V10H18V7A6 6 0 0 0 6 7zm2-3a4 4 0 1 1 8 0v3H8zm1 10v-2h6v2z"></svg:path>`,
})
export class TdesignLockOnFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
