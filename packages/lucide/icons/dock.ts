import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideDockIcon],svg[lucide-dock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 8h20"></svg:path><svg:rect width="20" height="16" x="2" y="4" rx="2"></svg:rect><svg:path d="M6 16h12"></svg:path></svg:g>`,
})
export class LucideDockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
