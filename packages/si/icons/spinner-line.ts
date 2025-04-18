import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siSpinnerLineIcon],svg[si-spinner-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 2v4.167m0 11.666V22m10-10h-4.166M6.167 12H2m17.209-7.208l-2.917 2.917m-8.584 8.583l-2.917 2.916m14.418 0l-2.917-2.916M7.708 7.709L4.791 4.792"></svg:path>`,
})
export class SiSpinnerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
