import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabBucketIcon],svg[lucide-lab-bucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 7c0-2.8 2.2-5 5-5h2c2.8 0 5 2.2 5 5M5 11h14m-1 0l-.8 9c-.1 1.1-1.1 2-2.2 2H9c-1.1 0-2.1-.9-2.2-2L6 11"></svg:path>`,
})
export class LucideLabBucketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
