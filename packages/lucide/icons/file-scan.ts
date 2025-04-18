import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFileScanIcon],svg[lucide-file-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4"></svg:path><svg:path d="M14 2v4a2 2 0 0 0 2 2h4m-4 6a2 2 0 0 0-2 2m6-2a2 2 0 0 1 2 2m-2 6a2 2 0 0 0 2-2m-6 2a2 2 0 0 1-2-2"></svg:path></svg:g>`,
})
export class LucideFileScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
