import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideHeartPlusIcon],svg[lucide-heart-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 19.5L12 21l-7-7c-1.5-1.45-3-3.2-3-5.5A5.5 5.5 0 0 1 7.5 3c1.76 0 3 .5 4.5 2c1.5-1.5 2.74-2 4.5-2a5.5 5.5 0 0 1 5.402 6.5M15 15h6m-3-3v6"></svg:path>`,
})
export class LucideHeartPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
