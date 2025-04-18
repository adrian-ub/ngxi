import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideRepeat2Icon],svg[lucide-repeat-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m2 9l3-3l3 3"></svg:path><svg:path d="M13 18H7a2 2 0 0 1-2-2V6m17 9l-3 3l-3-3"></svg:path><svg:path d="M11 6h6a2 2 0 0 1 2 2v10"></svg:path></svg:g>`,
})
export class LucideRepeat2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
