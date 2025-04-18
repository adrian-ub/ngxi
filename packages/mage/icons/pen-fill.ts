import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[magePenFillIcon],svg[mage-pen-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.911 7.142a7.45 7.45 0 0 0-5.07-5.07a2 2 0 0 0-1 0a2 2 0 0 0-.87.52l-2.23 2.24l-9.54 9.53a2.1 2.1 0 0 0-.56 1.14l-.61 4.16a2.1 2.1 0 0 0 .07.93c.102.3.27.573.49.8c.224.222.494.392.79.5c.207.068.423.101.64.1h.29l4.16-.61a2 2 0 0 0 1.15-.56l9.55-9.55l2.22-2.21a2 2 0 0 0 .54-1.92zm-1.46.63a.5.5 0 0 1-.14.22l-1.69 1.69l-4.32-4.31l1.71-1.71a.6.6 0 0 1 .23-.13h.23a5.94 5.94 0 0 1 4 4a.6.6 0 0 1-.02.24"></svg:path>`,
})
export class MagePenFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
