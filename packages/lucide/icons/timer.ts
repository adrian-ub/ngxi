import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideTimerIcon],svg[lucide-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 2h4m-2 12l3-3"></svg:path><svg:circle cx="12" cy="14" r="8"></svg:circle></svg:g>`,
})
export class LucideTimerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
