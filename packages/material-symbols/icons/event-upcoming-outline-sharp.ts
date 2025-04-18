import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEventUpcomingOutlineSharpIcon],svg[material-symbols-event-upcoming-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 22v-2h4V10H5v4H3V4h3V2h2v2h8V2h2v2h3v18zm-7 2l-1.4-1.4L9.175 20H1v-2h8.175L6.6 15.4L8 14l5 5zM5 8h14V6H5zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsEventUpcomingOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
