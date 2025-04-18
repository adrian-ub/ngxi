import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsIndentIncreaseSolidIcon],svg[teenyicons-indent-increase-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 4H3V3h12zM.854 5.146l2 2a.5.5 0 0 1 0 .708l-2 2l-.708-.708L1.793 7.5L.146 5.854zM15 8H7V7h8zm0 4H3v-1h12z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsIndentIncreaseSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
