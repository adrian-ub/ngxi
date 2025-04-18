import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextSubscriptIcon],svg[ph-text-subscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 208a8 8 0 0 1-8 8h-48a8 8 0 0 1-6.4-12.8l43.17-57.56a16 16 0 1 0-27.86-15a8 8 0 0 1-15.09-5.34a32.2 32.2 0 0 1 4.63-8.59a32 32 0 0 1 51.11 38.52L208 200h32a8 8 0 0 1 8 8M149.24 50a8 8 0 0 0-11.29.81L92 103.78l-45.95-53A8 8 0 0 0 34 61.24L81.41 116L34 170.76a8 8 0 0 0 12.1 10.48l46-53l45.95 53a8 8 0 1 0 12.1-10.48L102.59 116l47.46-54.76a8 8 0 0 0-.81-11.24"></svg:path>`,
})
export class PhTextSubscriptIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
