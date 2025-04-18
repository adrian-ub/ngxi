import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[monoIconsLockIcon],svg[mono-icons-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c1.648 0 3 1.352 3 3v3H9V7c0-1.648 1.352-3 3-3m5 6V7c0-2.752-2.248-5-5-5S7 4.248 7 7v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zM6 12h12v8H6z"></svg:path>`,
})
export class MonoIconsLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
