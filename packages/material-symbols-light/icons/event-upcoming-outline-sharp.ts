import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEventUpcomingOutlineSharpIcon],svg[material-symbols-light-event-upcoming-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.058 21v-1H19v-9.384H5V14.5H4V5h3.385V2.77h1.077V5h7.154V2.77h1V5H20v16zM8 23.288l-.689-.688l3.056-3.1H1.5v-1h8.867l-3.056-3.1l.689-.688L12.289 19zM5 9.615h14V6H5zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsLightEventUpcomingOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
