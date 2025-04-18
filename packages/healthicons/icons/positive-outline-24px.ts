import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPositiveOutline24pxIcon],svg[healthicons-positive-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 6.955a1 1 0 0 1 1 1V11h3.046a1 1 0 1 1 0 2H13v3.046a1 1 0 1 1-2 0V13H7.954a1 1 0 0 1 0-2H11V7.955a1 1 0 0 1 1-1"></svg:path><svg:path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPositiveOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
