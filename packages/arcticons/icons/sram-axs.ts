import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSramAxsIcon],svg[arcticons-sram-axs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m40.52 14.56l.02 4.28H29.93L20.88 34.5l-2.64-4.46l9.06-15.58z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m40.76 23.26l-.02 4.48h-5.41L26.69 42.5l-2.62-4.25l8.58-14.91l8.12-.08ZM22.11 5.5l2.55 4.33l-8.96 15.64H7.24l.01-4.32l5.8-.03l9.07-15.63Z"></svg:path>`,
})
export class ArcticonsSramAxsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
