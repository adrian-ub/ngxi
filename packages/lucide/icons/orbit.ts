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
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.341 6.484A10 10 0 0 1 10.266 21.85m-6.607-4.334A10 10 0 0 1 13.74 2.152"></svg:path><svg:circle cx="12" cy="12" r="3"></svg:circle><svg:circle cx="19" cy="5" r="2"></svg:circle><svg:circle cx="5" cy="19" r="2"></svg:circle></svg:g>`,
})
export class LucideOrbitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
