import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLockOnIcon],svg[tdesign-lock-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a4 4 0 0 1 4 4v3H8V7a4 4 0 0 1 4-4m6 7V7A6 6 0 0 0 6 7v3H3.5v12h17V10zM5.5 12h13v8h-13zM9 15h6v2H9z"></svg:path>`,
})
export class TdesignLockOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
