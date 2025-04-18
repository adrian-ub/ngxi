import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLaptopMinimalIcon],svg[lucide-laptop-minimal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="12" x="3" y="4" rx="2" ry="2"></svg:rect><svg:path d="M2 20h20"></svg:path></svg:g>`,
})
export class LucideLaptopMinimalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
