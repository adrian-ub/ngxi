import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabFanHandheldIcon],svg[lucide-lab-fan-handheld-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4c0-.6.4-1 1-1a17.8 17.8 0 0 1 16.9 16.9c0 .6-.4 1-1 1.1H5c-1.1.1-2-.8-2-1.9Zm6.9.4L3 19M15.7 8.3L3.6 20.4m16-6.3L5 21"></svg:path>`,
})
export class LucideLabFanHandheldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
