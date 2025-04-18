import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7ChevronUpChevronDownIcon],svg[f7-chevron-up-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 7.258c-.516 0-1.031.21-1.594.68L10.61 20.758c-.398.351-.632.844-.632 1.547c0 1.218.914 2.133 2.156 2.133c.492 0 1.008-.188 1.547-.61L28 12.156l14.32 11.672c.54.422 1.055.61 1.57.61c1.22 0 2.133-.915 2.133-2.133c0-.703-.234-1.196-.632-1.547L29.594 7.914c-.563-.445-1.055-.656-1.594-.656m0 41.484c.539 0 1.031-.21 1.594-.656L45.39 35.242c.398-.351.632-.844.632-1.547c0-1.218-.914-2.156-2.132-2.156c-.516 0-1.032.211-1.57.633L28 43.844L13.68 32.172q-.81-.633-1.547-.633c-1.242 0-2.156.938-2.156 2.156c0 .703.234 1.196.632 1.547l15.797 12.82c.563.47 1.078.68 1.594.68"></svg:path>`,
})
export class F7ChevronUpChevronDownIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
