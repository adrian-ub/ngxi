import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageRobotScreenIcon],svg[mage-robot-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14.706 4.313H9.294a4.98 4.98 0 0 0-4.982 4.981v5.412a4.98 4.98 0 0 0 4.982 4.982h5.412a4.98 4.98 0 0 0 4.982-4.982V9.294a4.98 4.98 0 0 0-4.982-4.982Z"></svg:path><svg:path d="M19.606 15.588h1.619a1.025 1.025 0 0 0 1.025-1.025V9.438a1.025 1.025 0 0 0-1.025-1.025h-1.62m-15.21 7.175h-1.62a1.025 1.025 0 0 1-1.025-1.025V9.438a1.025 1.025 0 0 1 1.025-1.025h1.62"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.765 8.413v-4.1m18.46 4.1l-.01-4.1"></svg:path><svg:path d="M13.507 7.704h-3.014a2.79 2.79 0 0 0-2.789 2.79v3.013a2.79 2.79 0 0 0 2.79 2.789h3.013a2.79 2.79 0 0 0 2.789-2.79v-3.013a2.79 2.79 0 0 0-2.79-2.789Z"></svg:path></svg:g>`,
})
export class MageRobotScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
