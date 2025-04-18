import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwLockIcon],svg[uiw-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0a8 8 0 0 1 8 8v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a8 8 0 0 1 8-8m6.6 10.245H3.4V18.6h13.2zm-6.239 1.378a1.5 1.5 0 0 1 .695 2.83v2.169a.7.7 0 0 1-1.4 0v-2.175a1.5 1.5 0 0 1 .705-2.824M10 1.4A6.6 6.6 0 0 0 3.4 8v.845h13.2V8A6.6 6.6 0 0 0 10 1.4"></svg:path>`,
})
export class UiwLockIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
