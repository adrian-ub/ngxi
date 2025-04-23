import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCpuIcon],svg[lucide-cpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></svg:path><svg:rect width="16" height="16" x="4" y="4" rx="2"></svg:rect><svg:rect width="8" height="8" x="8" y="8" rx="1"></svg:rect></svg:g>`,
})
export class LucideCpuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
