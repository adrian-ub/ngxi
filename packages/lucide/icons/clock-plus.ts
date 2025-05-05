import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideClockPlusIcon],svg[lucide-clock-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 6v6l3.644 1.822M16 19h6m-3-3v6"></svg:path><svg:path d="M21.92 13.267a10 10 0 1 0-8.653 8.653"></svg:path></svg:g>`,
})
export class LucideClockPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
