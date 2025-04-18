import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideHardDriveUploadIcon],svg[lucide-hard-drive-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m16 6l-4-4l-4 4m4-4v8"></svg:path><svg:rect width="20" height="8" x="2" y="14" rx="2"></svg:rect><svg:path d="M6 18h.01M10 18h.01"></svg:path></svg:g>`,
})
export class LucideHardDriveUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
