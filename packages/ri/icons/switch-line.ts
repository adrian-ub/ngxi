import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSwitchLineIcon],svg[ri-switch-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 3v18h-4.4a4.6 4.6 0 0 1-4.6-4.6V7.6a4.6 4.6 0 0 1 4.6-4.6zm-2 2h-2.4a2.6 2.6 0 0 0-2.6 2.6v8.8a2.6 2.6 0 0 0 2.6 2.6h2.4zm-2.5 5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m6.5-7h2.4a4.6 4.6 0 0 1 4.6 4.6v8.8a4.6 4.6 0 0 1-4.6 4.6h-2.4zm3 11.7a1.8 1.8 0 1 0 0-3.6a1.8 1.8 0 0 0 0 3.6"></svg:path>`,
})
export class RiSwitchLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
