import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFileBadge2Icon],svg[lucide-file-badge-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></svg:path><svg:circle cx="12" cy="10" r="3"></svg:circle><svg:path d="M14 2v4a2 2 0 0 0 2 2h4m-6 4.5l1 5.5l-3-1l-3 1l1-5.5"></svg:path></svg:g>`,
})
export class LucideFileBadge2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
