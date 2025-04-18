import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageRobotUwuIcon],svg[mage-robot-uwu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14.706 4.313H9.294a4.98 4.98 0 0 0-4.982 4.981v5.412a4.98 4.98 0 0 0 4.982 4.982h5.412a4.98 4.98 0 0 0 4.982-4.982V9.294a4.98 4.98 0 0 0-4.982-4.982Z"></svg:path><svg:path d="M19.606 15.588h1.619a1.025 1.025 0 0 0 1.025-1.025V9.438a1.025 1.025 0 0 0-1.025-1.025h-1.62m-15.21 7.175h-1.62a1.025 1.025 0 0 1-1.025-1.025V9.438a1.025 1.025 0 0 1 1.025-1.025h1.62"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.765 8.413v-4.1m18.46 4.1l-.01-4.1M14.05 9.704c0 2.296 2.87 2.296 2.87 0m-10.045 0c0 2.296 2.87 2.296 2.87 0m-.328 5.494c0 1.722 2.583 1.302 2.583.39c0 .912 2.583 1.332 2.583-.39"></svg:path></svg:g>`,
})
export class MageRobotUwuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
