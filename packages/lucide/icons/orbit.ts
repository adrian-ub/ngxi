import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideOrbitIcon],svg[lucide-orbit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="3"></svg:circle><svg:circle cx="19" cy="5" r="2"></svg:circle><svg:circle cx="5" cy="19" r="2"></svg:circle><svg:path d="M10.4 21.9a10 10 0 0 0 9.941-15.416M13.5 2.1a10 10 0 0 0-9.841 15.416"></svg:path></svg:g>`,
})
export class LucideOrbitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
