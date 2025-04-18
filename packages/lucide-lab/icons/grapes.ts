import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabGrapesIcon],svg[lucide-lab-grapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M22 5V2l-5.89 5.89"></svg:path><svg:circle cx="16.6" cy="15.89" r="3"></svg:circle><svg:circle cx="8.11" cy="7.4" r="3"></svg:circle><svg:circle cx="12.35" cy="11.65" r="3"></svg:circle><svg:circle cx="13.91" cy="5.85" r="3"></svg:circle><svg:circle cx="18.15" cy="10.09" r="3"></svg:circle><svg:circle cx="6.56" cy="13.2" r="3"></svg:circle><svg:circle cx="10.8" cy="17.44" r="3"></svg:circle><svg:circle cx="5" cy="19" r="3"></svg:circle></svg:g>`,
})
export class LucideLabGrapesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
