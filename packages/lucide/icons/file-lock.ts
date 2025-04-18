import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFileLockIcon],svg[lucide-file-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></svg:path><svg:rect width="8" height="6" x="8" y="12" rx="1"></svg:rect><svg:path d="M10 12v-2a2 2 0 1 1 4 0v2"></svg:path></svg:g>`,
})
export class LucideFileLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
