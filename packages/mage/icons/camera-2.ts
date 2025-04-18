import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageCamera2Icon],svg[mage-camera-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="18.5" height="16" x="2.75" y="4" rx="4"></svg:rect><svg:circle cx="12" cy="12.5" r="3.75"></svg:circle><svg:path stroke-linecap="round" d="M17 7.003h.5"></svg:path></svg:g>`,
})
export class MageCamera2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
