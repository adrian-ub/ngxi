import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPasswordBoldIcon],svg[ph-password-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 56v144a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0m86.73 50.7L120 111.48V96a12 12 0 0 0-24 0v15.48l-14.73-4.78a12 12 0 1 0-7.41 22.82l14.72 4.79l-9.1 12.52a12 12 0 1 0 19.42 14.11l9.1-12.52l9.1 12.52a12 12 0 1 0 19.42-14.11l-9.1-12.52l14.72-4.79a12 12 0 1 0-7.41-22.82m115.12 7.7a12 12 0 0 0-15.12-7.7L220 111.48V96a12 12 0 0 0-24 0v15.48l-14.73-4.78a12 12 0 1 0-7.41 22.82l14.72 4.79l-9.1 12.52a12 12 0 1 0 19.42 14.11l9.1-12.52l9.1 12.52a12 12 0 1 0 19.42-14.11l-9.1-12.52l14.72-4.79a12 12 0 0 0 7.71-15.12"></svg:path>`,
})
export class PhPasswordBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
