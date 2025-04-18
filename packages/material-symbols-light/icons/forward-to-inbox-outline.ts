import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightForwardToInboxOutlineIcon],svg[material-symbols-light-forward-to-inbox-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12.116L4 6.885v10.5q0 .269.173.442t.443.173H13.5v1H4.616q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616V13.5h-1V6.885zM12 11l7.692-5H4.308zm6.616 10.789l-.689-.689l2.056-2.1h-4.867v-1h4.886l-2.1-2.1l.714-.688l3.288 3.288zM4 6.884v11.789V13.5v.171V6z"></svg:path>`,
})
export class MaterialSymbolsLightForwardToInboxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
