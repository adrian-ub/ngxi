import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabBarnIcon],svg[lucide-lab-barn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M22 12H2l2-6l8-4l8 4Z"></svg:path><svg:path d="M10 8h4v4h-4zM7 22l10-10v10L7 12Z"></svg:path><svg:path d="M21 12v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8"></svg:path></svg:g>`,
})
export class LucideLabBarnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
