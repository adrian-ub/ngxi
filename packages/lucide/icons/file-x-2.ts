import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFileX2Icon],svg[lucide-file-x-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></svg:path><svg:path d="M14 2v4a2 2 0 0 0 2 2h4M8 12.5l-5 5m0-5l5 5"></svg:path></svg:g>`,
})
export class LucideFileX2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
