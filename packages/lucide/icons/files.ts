import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFilesIcon],svg[lucide-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20 7h-3a2 2 0 0 1-2-2V2"></svg:path><svg:path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"></svg:path><svg:path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"></svg:path></svg:g>`,
})
export class LucideFilesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
