import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsPhotoFilterIcon],svg[proicons-photo-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="8.73" r="5.98"></svg:circle><svg:circle cx="8.729" cy="15.27" r="5.98"></svg:circle><svg:circle cx="15.271" cy="15.27" r="5.98"></svg:circle></svg:g>`,
})
export class ProiconsPhotoFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
