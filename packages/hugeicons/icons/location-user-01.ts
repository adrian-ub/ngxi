import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLocationUser01Icon],svg[hugeicons-location-user-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.198 8h-2.396c-3.444 0-5.766 3.58-4.409 6.8a1.2 1.2 0 0 0 1.102.739h.844c.284 0 .532.196.601.477l1.086 4.417A2.04 2.04 0 0 0 12 22a2.04 2.04 0 0 0 1.974-1.567l1.086-4.417a.62.62 0 0 1 .601-.477h.844a1.2 1.2 0 0 0 1.102-.74C18.964 11.581 16.642 8 13.197 8"></svg:path><svg:circle cx="12" cy="5" r="3"></svg:circle></svg:g>`,
})
export class HugeiconsLocationUser01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
