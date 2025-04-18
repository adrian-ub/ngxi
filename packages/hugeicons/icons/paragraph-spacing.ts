import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsParagraphSpacingIcon],svg[hugeicons-paragraph-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 2h18M3 22h18M9.473 8.509l1.8-2.134c.37-.442.995-.446 1.4 0l1.78 2.134m-2.48-1.424v4.323l-.001 5.591m2.5-1.424l-1.8 2.134c-.37.442-.994.446-1.4 0l-1.78-2.134" color="currentColor"></svg:path>`,
})
export class HugeiconsParagraphSpacingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
