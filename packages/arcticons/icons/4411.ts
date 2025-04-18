import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons4411Icon],svg[arcticons-4411-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.715 22.561l-.001-9.061l-4.862 6.086h6.002m-10.845 2.975l-.001-9.061l-4.862 6.086h6.002M17.538 34.5h4.53m-4.53-7.827l2.265-1.234m0 0V34.5m7.441 0h4.53m-4.53-7.827l2.265-1.234m0 0V34.5"></svg:path>`,
})
export class Arcticons4411Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
