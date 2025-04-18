import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFileSearch2Icon],svg[lucide-file-search-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></svg:path><svg:path d="M14 2v4a2 2 0 0 0 2 2h4"></svg:path><svg:circle cx="11.5" cy="14.5" r="2.5"></svg:circle><svg:path d="M13.3 16.3L15 18"></svg:path></svg:g>`,
})
export class LucideFileSearch2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
