import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEventSeatOutlineSharpIcon],svg[material-symbols-light-event-seat-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 20.308v-5h15v5h-1v-4h-13v4zM4 13.654v-2h2v2zm3.77-.116v-9.73h8.46v9.73zm10.23.116v-2h2v2zm-9.23-1.115h6.46V4.808H8.77zm0 0h6.46z"></svg:path>`,
})
export class MaterialSymbolsLightEventSeatOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
