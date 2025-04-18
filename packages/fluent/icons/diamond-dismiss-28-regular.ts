import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDiamondDismiss28RegularIcon],svg[fluent-diamond-dismiss-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.098 11.348a3.75 3.75 0 0 0 0 5.303l8.25 8.25a3.75 3.75 0 0 0 5.303 0l8.25-8.25a3.75 3.75 0 0 0 0-5.303l-8.25-8.25a3.75 3.75 0 0 0-5.303 0zm1.061 4.243a2.25 2.25 0 0 1 0-3.182l8.25-8.25a2.25 2.25 0 0 1 3.182 0l8.25 8.25a2.25 2.25 0 0 1 0 3.182l-8.25 8.25a2.25 2.25 0 0 1-3.182 0zM10.78 9.72a.75.75 0 1 0-1.06 1.06L12.94 14l-3.22 3.22a.75.75 0 1 0 1.06 1.06L14 15.06l3.22 3.22a.75.75 0 1 0 1.06-1.06L15.06 14l3.22-3.22a.75.75 0 1 0-1.06-1.06L14 12.94z"></svg:path>`,
})
export class FluentDiamondDismiss28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
