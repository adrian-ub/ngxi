import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundLabelOffIcon],svg[ic-round-label-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.59 12.58a.99.99 0 0 0 0-1.16l-3.96-5.58C17.27 5.33 16.67 5 16 5H8.66l10.7 10.73zM2.72 4.72l.87.87C3.23 5.95 3 6.45 3 7v10c0 1.1.9 2 2 2h12l1.29 1.29a.996.996 0 1 0 1.41-1.41L4.14 3.31c-.38-.38-1.01-.39-1.4-.01a.99.99 0 0 0-.02 1.42"></svg:path>`,
})
export class IcRoundLabelOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
