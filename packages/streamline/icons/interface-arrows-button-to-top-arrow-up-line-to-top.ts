import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonToTopArrowUpLineToTopIcon],svg[streamline-interface-arrows-button-to-top-arrow-up-line-to-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 8.29l6.15-6.14a.48.48 0 0 1 .7 0l6.15 6.14M.5 12h13"></svg:path>`,
})
export class StreamlineInterfaceArrowsButtonToTopArrowUpLineToTopIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
