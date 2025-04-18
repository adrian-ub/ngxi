import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceUnlockIcon],svg[guidance-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M6.5 10.5V6a5.5 5.5 0 1 1 11 0M12 15v4m8.5 4.5h-17v-.25l.075-.327a26.34 26.34 0 0 0 0-11.846L3.5 10.75v-.25h17v.25l-.075.327a26.34 26.34 0 0 0 0 11.846l.075.327z"></svg:path>`,
})
export class GuidanceUnlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
