import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationPencilIcon],svg[foundation-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88.79 29.297L70.702 11.209a2.69 2.69 0 0 0-3.808 0L17.389 60.713l.109.109l-.171-.046l-6.772 25.272l.004.001a2.68 2.68 0 0 0 .642 2.748a2.68 2.68 0 0 0 3.033.531l.002.009l25.027-6.706l-.016-.059l.038.038L88.79 33.105a2.69 2.69 0 0 0 0-3.808m-69.998 51.85l4.022-15.009l10.988 10.988z"></svg:path>`,
})
export class FoundationPencilIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
