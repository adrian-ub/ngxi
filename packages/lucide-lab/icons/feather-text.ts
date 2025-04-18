import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabFeatherTextIcon],svg[lucide-lab-feather-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.9 8H9.2m-4.1 4H14l8-8.2c-2.3-2.3-6.1-2.3-8.5 0L2 15m0 4h8m11-2v1c0 1 1 1.5 1 2.5c0 .8-.7 1.5-1.5 1.5h-5c-.8 0-1.5-.7-1.5-1.5c0-1 1-1.5 1-2.5v-1m-1 0h8"></svg:path>`,
})
export class LucideLabFeatherTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
