import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimSignOutAltIcon],svg[uim-sign-out-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.707 11.293l-4-4a1 1 0 0 0-1.414 1.414L12.586 11H2.05c-.03.33-.05.66-.05 1s.02.67.05 1h10.536l-2.293 2.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414"></svg:path><svg:path fill="currentColor" d="M12 2a10 10 0 0 0-9.95 9h10.536l-2.293-2.293a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 13H2.05A10 10 0 1 0 12 2" opacity=".5"></svg:path>`,
})
export class UimSignOutAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
