import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabFrogFaceIcon],svg[lucide-lab-frog-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 7h.01"></svg:path><svg:circle cx="6" cy="7" r="4"></svg:circle><svg:path d="M14.4 5.3a10 10 0 0 0-4.8 0"></svg:path><svg:circle cx="18" cy="7" r="4"></svg:circle><svg:path d="M18 7h.01M22 13.5C22 16 17.5 18 12 18S2 16 2 13.5m8 .5h.01M14 14h.01"></svg:path><svg:path d="M3.1 9.75A7 7 0 0 0 2 13.5C2 18.2 6.5 22 12 22s10-3.8 10-8.5a7 7 0 0 0-1.1-3.75"></svg:path></svg:g>`,
})
export class LucideLabFrogFaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
