import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCaptionsIcon],svg[lucide-captions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="14" x="3" y="5" rx="2" ry="2"></svg:rect><svg:path d="M7 15h4m4 0h2M7 11h2m4 0h4"></svg:path></svg:g>`,
})
export class LucideCaptionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
