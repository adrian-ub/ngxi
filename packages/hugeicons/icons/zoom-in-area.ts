import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsZoomInAreaIcon],svg[hugeicons-zoom-in-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.4 19.4L22 22m-1.3-7.15a5.85 5.85 0 1 0-11.7 0a5.85 5.85 0 0 0 11.7 0"></svg:path><svg:path d="M19.075 19.075L22 22m-9.1-7.15h1.95m0 0h1.95m-1.95 0V12.9m0 1.95v1.95m5.85-1.95a5.85 5.85 0 1 0-11.7 0a5.85 5.85 0 0 0 11.7 0M2 6c.13-1.335.426-2.234 1.096-2.904S4.665 2.131 6 2m0 20c-1.335-.13-2.234-.426-2.904-1.096S2.131 19.335 2 18M22 6c-.13-1.335-.426-2.234-1.096-2.904S19.335 2.131 18 2M2 10v4M14 2h-4"></svg:path></svg:g>`,
})
export class HugeiconsZoomInAreaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
