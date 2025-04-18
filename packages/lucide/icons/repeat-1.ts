import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideRepeat1Icon],svg[lucide-repeat-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m17 2l4 4l-4 4"></svg:path><svg:path d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4l4-4"></svg:path><svg:path d="M21 13v1a4 4 0 0 1-4 4H3m8-8h1v4"></svg:path></svg:g>`,
})
export class LucideRepeat1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
