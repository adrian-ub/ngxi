import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSmilePlusIcon],svg[lucide-smile-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M22 11v1a10 10 0 1 1-9-10"></svg:path><svg:path d="M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01M16 5h6m-3-3v6"></svg:path></svg:g>`,
})
export class LucideSmilePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
