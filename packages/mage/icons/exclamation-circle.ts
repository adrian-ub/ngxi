import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageExclamationCircleIcon],svg[mage-exclamation-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="1.5" d="M12 2.5A9.5 9.5 0 0 0 2.5 12a9.5 9.5 0 1 0 19 0A9.5 9.5 0 0 0 12 2.5m-.005 4.222v6.334"></svg:path><svg:path stroke-width="2" d="M12.044 16.557h-.01"></svg:path></svg:g>`,
})
export class MageExclamationCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
