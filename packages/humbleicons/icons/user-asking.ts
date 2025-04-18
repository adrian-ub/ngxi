import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsUserAskingIcon],svg[humbleicons-user-asking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14H9.286C6.919 14 5 15.679 5 17.75V19M19 7v5a2 2 0 0 1-2 2h-2v5M14 8a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path>`,
})
export class HumbleiconsUserAskingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
