import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideDramaIcon],svg[lucide-drama-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 11h.01M14 6h.01M18 6h.01M6.5 13.1h.01M22 5c0 9-4 12-6 12s-6-3-6-12q0-3 6-3c6 0 6 1 6 3"></svg:path><svg:path d="M17.4 9.9c-.8.8-2 .8-2.8 0m-4.5-2.8C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6c4.5 7.8 9.5 8.4 11.2 7.4c.9-.5 1.9-2.1 1.9-4.7"></svg:path><svg:path d="M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"></svg:path></svg:g>`,
})
export class LucideDramaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
