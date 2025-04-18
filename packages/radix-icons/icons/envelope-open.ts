import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsEnvelopeOpenIcon],svg[radix-icons-envelope-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.947.165a1 1 0 0 0-.894 0l-6.5 3.25A1 1 0 0 0 0 4.309V12a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V4.309a1 1 0 0 0-.553-.894zm5.622 3.928L7.5 1.06L1.431 4.093L7.5 7.291zM1 4.883V12h13V4.884L7.71 8.198a.45.45 0 0 1-.42 0z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsEnvelopeOpenIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
