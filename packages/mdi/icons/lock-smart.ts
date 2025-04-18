import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLockSmartIcon],svg[mdi-lock-smart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6M8 6h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2zM8 9h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2zm-6 3h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2zm-2 4a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiLockSmartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
