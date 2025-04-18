import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideHardDriveDownloadIcon],svg[lucide-hard-drive-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 2v8m4-4l-4 4l-4-4"></svg:path><svg:rect width="20" height="8" x="2" y="14" rx="2"></svg:rect><svg:path d="M6 18h.01M10 18h.01"></svg:path></svg:g>`,
})
export class LucideHardDriveDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
