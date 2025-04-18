import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeTongue2Icon],svg[icomoon-free-tongue2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M5 4a1 1 0 1 1 0 2a1 1 0 0 1 0-2m7 6h-1v1.5a1.5 1.5 0 0 1-3 0V10H4V9h8zm-1-4a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class IcomoonFreeTongue2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
