import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBetaIcon],svg[hugeicons-beta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.883 10.2c2.252 0 4.078-1.612 4.078-3.6S15.135 3 12.883 3S8.805 4.612 8.805 6.6v12.6c0 .994-.913 1.8-2.039 1.8c-.755 0-1.413-.362-1.766-.9m3.805-5.4c0 2.485 2.282 4.5 5.098 4.5S19 17.185 19 14.7s-2.282-4.613-5.097-4.613" color="currentColor"></svg:path>`,
})
export class HugeiconsBetaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
