import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLocateOffIcon],svg[lucide-locate-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19v3m0-20v3m6.89 8.24a7 7 0 0 0-8.13-8.13M19 12h3M2 12h3M2 2l20 20M7.05 7.05a7 7 0 0 0 9.9 9.9"></svg:path>`,
})
export class LucideLocateOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
