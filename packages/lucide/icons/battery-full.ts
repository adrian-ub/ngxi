import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBatteryFullIcon],svg[lucide-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="16" height="10" x="2" y="7" rx="2" ry="2"></svg:rect><svg:path d="M22 11v2M6 11v2m4-2v2m4-2v2"></svg:path></svg:g>`,
})
export class LucideBatteryFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
