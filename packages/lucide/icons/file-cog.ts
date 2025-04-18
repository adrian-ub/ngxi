import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFileCogIcon],svg[lucide-file-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 2v4a2 2 0 0 0 2 2h4M3.2 12.9l-.9-.4m.9 2.6l-.9.4"></svg:path><svg:path d="M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5m.9 4.7l-.4-.9m.4 6.5l-.4.9m3-7.4l-.4.9m.4 6.5l-.4-.9m2.6-4.3l-.9.4m.9 2.6l-.9-.4"></svg:path><svg:circle cx="6" cy="14" r="3"></svg:circle></svg:g>`,
})
export class LucideFileCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
