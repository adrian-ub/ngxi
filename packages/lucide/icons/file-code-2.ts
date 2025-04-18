import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFileCode2Icon],svg[lucide-file-code-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></svg:path><svg:path d="M14 2v4a2 2 0 0 0 2 2h4M5 12l-3 3l3 3m4 0l3-3l-3-3"></svg:path></svg:g>`,
})
export class LucideFileCode2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
