import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEditCalendarOutlineSharpIcon],svg[material-symbols-light-edit-calendar-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21V5h3.385V2.77h1.077V5h7.154V2.77h1V5H20v6.616h-1v-1H5V20h6.846v1zM5 9.615h14V6H5zm0 0V6zM14.23 21v-2.21l5.96-5.934l2.19 2.204L16.44 21zm6.886-5.94l-.925-.945zm-6 5.056h.95l3.467-3.474l-.47-.475l-.455-.488l-3.492 3.486zm3.948-3.949l-.456-.488l.925.963z"></svg:path>`,
})
export class MaterialSymbolsLightEditCalendarOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
