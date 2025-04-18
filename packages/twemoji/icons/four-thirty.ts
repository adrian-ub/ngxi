import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFourThirtyIcon],svg[twemoji-four-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="18" r="18" fill="#99AAB5"></svg:circle><svg:circle cx="18" cy="18" r="14" fill="#E1E8ED"></svg:circle><svg:path fill="#67757F" d="M18 31a1 1 0 0 1-1-1V18a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1"></svg:path><svg:path fill="#67757F" d="M24.999 24a1 1 0 0 1-.58-.187l-7-5a1 1 0 1 1 1.162-1.628l7 5A1 1 0 0 1 24.999 24"></svg:path>`,
})
export class TwemojiFourThirtyIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
