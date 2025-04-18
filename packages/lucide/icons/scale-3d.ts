import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideScale3dIcon],svg[lucide-scale-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 7v11a1 1 0 0 0 1 1h11m-11.707-.293L11 13"></svg:path><svg:circle cx="19" cy="19" r="2"></svg:circle><svg:circle cx="5" cy="5" r="2"></svg:circle></svg:g>`,
})
export class LucideScale3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
