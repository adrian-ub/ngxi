import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsTestimonialIcon],svg[dashicons-testimonial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h12c.55 0 1.02.2 1.41.59S18 4.45 18 5v7c0 .55-.2 1.02-.59 1.41S16.55 14 16 14h-1l-5 5v-5H4c-.55 0-1.02-.2-1.41-.59S2 12.55 2 12V5c0-.55.2-1.02.59-1.41S3.45 3 4 3m11 2H4v1h11zm1 3H4v1h12zm-3 3H4v1h9z"></svg:path>`,
})
export class DashiconsTestimonialIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
