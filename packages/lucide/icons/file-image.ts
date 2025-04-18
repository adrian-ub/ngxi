import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFileImageIcon],svg[lucide-file-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></svg:path><svg:path d="M14 2v4a2 2 0 0 0 2 2h4"></svg:path><svg:circle cx="10" cy="12" r="2"></svg:circle><svg:path d="m20 17l-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"></svg:path></svg:g>`,
})
export class LucideFileImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
