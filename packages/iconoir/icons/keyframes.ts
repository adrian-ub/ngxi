import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframesIcon],svg[iconoir-keyframes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M13.848 13.317L9.505 18.28a2 2 0 0 1-3.01 0l-4.343-4.963a2 2 0 0 1 0-2.634L6.495 5.72a2 2 0 0 1 3.01 0l4.343 4.963a2 2 0 0 1 0 2.634"></svg:path><svg:path d="m13 19l4.884-5.698a2 2 0 0 0 0-2.604L13 5"></svg:path><svg:path d="m17 19l4.884-5.698a2 2 0 0 0 0-2.604L17 5"></svg:path></svg:g>`,
})
export class IconoirKeyframesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
