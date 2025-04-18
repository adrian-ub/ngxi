import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMandatoryIcon],svg[ix-mandatory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m295.481 362.666l46.268-33.246l-54.303-60.676l81.178-15.792l-16.901-54.303l-77.021 34.078l9.42-83.394h-56.52l9.42 83.394L160 198.649l-16.623 54.303l80.9 15.792l-54.303 60.676l46.546 33.246l39.342-72.034z"></svg:path>`,
})
export class IxMandatoryIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
