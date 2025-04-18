import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLockOffIcon],svg[tdesign-lock-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3a4 4 0 0 0-4 4v3h12.5v12h-17V10H6V7a6 6 0 0 1 11.725-1.8l.3.954l-1.908.6l-.3-.954A4 4 0 0 0 12 3m-6.5 9v8h13v-8zM9 15h6v2H9z" clip-rule="evenodd"></svg:path>`,
})
export class TdesignLockOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
