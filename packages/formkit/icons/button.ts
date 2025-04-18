import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitButtonIcon],svg[formkit-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3h36a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1M0 4a4 4 0 0 1 4-4h36a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4zm12 6.5a1.5 1.5 0 0 0 0 3h20a1.5 1.5 0 0 0 0-3z" clip-rule="evenodd"></svg:path>`,
})
export class FormkitButtonIcon {
  readonly viewBox = input("0 0 44 24")
  readonly width = input("1.84em")
  readonly height = input("1em")
}
