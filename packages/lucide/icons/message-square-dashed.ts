import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMessageSquareDashedIcon],svg[lucide-message-square-dashed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 17H7l-4 4v-7m11 3h1M14 3h1m4 0a2 2 0 0 1 2 2m0 9v1a2 2 0 0 1-2 2m2-8v1M3 9v1m2-7a2 2 0 0 0-2 2m6-2h1"></svg:path>`,
})
export class LucideMessageSquareDashedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
