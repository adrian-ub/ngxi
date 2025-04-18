import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumPowerIcon],svg[circum-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.638 5.209a8.782 8.782 0 1 0 13.917 8.96a8.87 8.87 0 0 0-3.189-8.96c-.5-.39-1.214.312-.707.707a7.93 7.93 0 0 1 3.082 7.113a7.787 7.787 0 0 1-15.308.956a7.9 7.9 0 0 1 2.912-8.069c.507-.394-.205-1.1-.707-.707"></svg:path><svg:path fill="currentColor" d="M12.5 12.519a.5.5 0 0 1-1 0V3.548a.5.5 0 0 1 1 0Z"></svg:path>`,
})
export class CircumPowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
