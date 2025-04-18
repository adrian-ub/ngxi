import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsSpinnerIcon],svg[proicons-spinner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21.25A9.25 9.25 0 1 0 2.75 12"></svg:path>`,
})
export class ProiconsSpinnerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
