import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineWbAutoIcon],svg[ic-baseline-wb-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.85 12.65h2.3L8 9zM22 7l-1.2 6.29L19.3 7h-1.6l-1.49 6.29L15 7h-.76C12.77 5.17 10.53 4 8 4c-4.42 0-8 3.58-8 8s3.58 8 8 8c3.13 0 5.84-1.81 7.15-4.43l.1.43H17l1.5-6.1L20 16h1.75l2.05-9zm-11.7 9l-.7-2H6.4l-.7 2H3.8L7 7h2l3.2 9z"></svg:path>`,
})
export class IcBaselineWbAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
