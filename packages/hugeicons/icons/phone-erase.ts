import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPhoneEraseIcon],svg[hugeicons-phone-erase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 7c0-2.357 0-3.536-.732-4.268S14.357 2 12 2H9c-2.357 0-3.536 0-4.268.732S4 4.643 4 7v10c0 2.357 0 3.535.732 4.268S6.643 22 9 22h3c2.357 0 3.536 0 4.268-.732C17 20.535 17 19.357 17 17"></svg:path><svg:path d="M12.5 2h-4L9 3h3zM14 9l6 6m0-6l-6 6"></svg:path></svg:g>`,
})
export class HugeiconsPhoneEraseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
