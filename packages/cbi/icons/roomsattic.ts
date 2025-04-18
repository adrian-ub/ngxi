import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiRoomsatticIcon],svg[cbi-roomsattic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.561 10.368l8.753 12.063c.496.681.025 1.656-.8 1.656H7.477c-.827 0-1.297-.975-.801-1.657l8.763-12.063a.688.688 0 0 1 1.122.001M16 22.078a3 3 0 1 0 0-6a3 3 0 0 0 0 6m15.794 2.373c.5.666.03 1.627-.797 1.627h-.043a1 1 0 0 1-.8-.402L28.93 24.03h.017l-2.28-3.036L17.46 8.731l-1-1.33a.578.578 0 0 0-.921 0l-1 1.33l-9.206 12.263l-2.28 3.035h.017l-1.225 1.645a1 1 0 0 1-.8.403h-.042c-.828 0-1.298-.96-.797-1.627l1.249-1.665l2.28-3.036L12.943 7.49l1.459-1.944l.898-1.195a.876.876 0 0 1 1.4 0l.898 1.196l1.459 1.943l2.939 3.914V9.11c0-.57.448-1.031 1-1.031H25c.553 0 1 .461 1 1.03v7.626l2.266 3.015l2.28 3.037z"></svg:path>`,
})
export class CbiRoomsatticIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
