import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxLockAltIcon],svg[bx-lock-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5m6 10l.002 8H6v-8zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3z"></svg:path>`,
})
export class BxLockAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
