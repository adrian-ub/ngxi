import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsPinOutlineIcon],svg[famicons-pin-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="96" r="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="currentColor" d="M272 164a9 9 0 0 0-9-9h-14a9 9 0 0 0-9 9v293.56a32.1 32.1 0 0 0 2.49 12.38l10.07 24a3.92 3.92 0 0 0 6.88 0l10.07-24a32.1 32.1 0 0 0 2.49-12.38Z"></svg:path><svg:circle cx="280" cy="72" r="24" fill="currentColor"></svg:circle>`,
})
export class FamiconsPinOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
