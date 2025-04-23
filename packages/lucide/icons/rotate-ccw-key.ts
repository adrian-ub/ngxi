import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideRotateCcwKeyIcon],svg[lucide-rotate-ccw-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m14.5 9.5l1 1m0-2l-4 4M3 12a9 9 0 1 0 9-9a9.74 9.74 0 0 0-6.74 2.74L3 8"></svg:path><svg:path d="M3 3v5h5"></svg:path><svg:circle cx="10" cy="14" r="2"></svg:circle></svg:g>`,
})
export class LucideRotateCcwKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
