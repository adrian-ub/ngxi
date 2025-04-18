import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideListStartIcon],svg[lucide-list-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 12H3m13 6H3m7-12H3m18 12V8a2 2 0 0 0-2-2h-5"></svg:path><svg:path d="m16 8l-2-2l2-2"></svg:path></svg:g>`,
})
export class LucideListStartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
